import { ACTION, ACTION_CONFIG, METHOD, VAR } from '../enums';
import schemas from '../swagger/schemas.json';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { CONST } from '../enums/const.enum';
import { createFeatureVector, getOrCreateTrainedModel, getOrCreateVocabulary, guessUserIdMeaning } from './ai-service';

const readFile = promisify(fs.readFile);

function toInterfaceName(requestName: string): string {
  // Kiểm tra định dạng của requestName
  if (!requestName || typeof requestName !== 'string') {
    console.warn(`⚠️ requestName không hợp lệ: ${requestName}`);
    return CONST.versionSwagger;
  }

  // Tách chuỗi camelCase thành các từ
  const words = requestName
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Thêm khoảng trắng trước chữ hoa
    .split(' '); // Tách thành mảng từ

  // Chuyển thành PascalCase và xử lý từ đặc biệt
  const pascalCase = words
    .map((word) => {
      if (word.toUpperCase() === 'DM') return 'Dm'; // Chuyển Dm/DM/dm thành DM
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  // Kiểm tra CONST.versionSwagger
  if (!CONST.versionSwagger.includes('$')) {
    console.warn(`⚠️ CONST.versionSwagger không chứa ký tự $: ${CONST.versionSwagger}`);
    return `${CONST.versionSwagger}${pascalCase}`;
  }

  // Thay $ trong VAR.versionSwagger bằng V3 + pascalCase
  return CONST.versionSwagger.replace('$', pascalCase);
}

function resolveSchema(
  schema: any,
  allSchemas: Record<string, any>,
  visited: Set<string> = new Set()
): any {
  if (!schema || typeof schema !== 'object') return schema;

  // Nếu schema có $ref
  if (schema['$ref']) {
    const refPath = schema['$ref'].replace('#/components/schemas/', '');
    // Tạo một bản sao của visited để tránh ảnh hưởng đến các nhánh khác
    const newVisited = new Set(visited);
    if (newVisited.has(refPath)) {
      console.warn(`⚠️ Phát hiện tham chiếu đệ quy cho ${refPath}`);
      return { $ref: refPath, recursive: true }; // Trả về đánh dấu thay vì {}
    }
    newVisited.add(refPath);
    const resolvedSchema = allSchemas[refPath];
    if (!resolvedSchema) {
      throw new Error(`Không tìm thấy schema cho $ref: ${refPath}`);
    }
    return resolveSchema(resolvedSchema, allSchemas, newVisited);
  }

  // Xử lý mảng
  if (schema.type === 'array' && schema.items) {
    return {
      ...schema,
      items: resolveSchema(schema.items, allSchemas, new Set(visited)), // Dùng new Set để reset visited
    };
  }

  // Xử lý các thuộc tính của object
  if (schema.type === 'object' && schema.properties) {
    const resolvedProperties: Record<string, any> = {};
    for (const [key, prop] of Object.entries(schema.properties)) {
      resolvedProperties[key] = resolveSchema(prop, allSchemas, new Set(visited)); // Reset visited cho mỗi thuộc tính
    }
    return {
      ...schema,
      properties: resolvedProperties,
    };
  }

  return { ...schema };
}

interface Schema {
  type?: string;
  description?: string;
  properties?: Record<string, Schema>;
  required?: string[];
  enum?: any[];
  items?: Schema;
}

interface ActionConfig {
  method: string;
  path: string;
}

interface TrainingData {
  action: string;
  apiEndpoint: string;
  swaggerDesc: string;
  contextClues: string[];
  httpMethod?: string;
  schemaId?: string;
  fieldName?: string;
}

interface PredictionResult {
  userIdMeaning: string;
  confidence: number;
  probabilities?: Record<string, number>;
  reasoning: string;
  method?: string;
  suggestedVariableName?: string;
}

interface ProcessedBody {
  [key: string]: any;
  metadata?: {
    resolvedFields: Record<
      string,
      {
        originalValue: any;
        resolvedValue: any;
        isRequired?: boolean;
        propKey?: string;
        propType?: string;
        description?: string;
        reasoning?: string;
        aiResult?: PredictionResult;
      }
    >;
  };
}

class AIUserIdResolver {
  private _trainingData: TrainingData[] = [];
  private model: tf.LayersModel | null = null;
  private vocabulary: Map<string, number> | null = null;
  private isModelLoaded: boolean = false;

  constructor() {
    this._trainingData = [];
  }

  public async initializeFromSwagger(): Promise<void> {
    try {
      const swaggerPath = path.resolve(__dirname, '../swagger/schemas.json');
      if (!(await exists(swaggerPath))) {
        throw new Error(`File Swagger không tồn tại tại: ${swaggerPath}`);
      }
      const fileContent = await readFile(swaggerPath, 'utf-8');
      const swaggerJson = JSON.parse(fileContent);
      this._trainingData = this.generateTrainingDataFromSwagger(swaggerJson);
      console.log(`✅ Đã tải ${this._trainingData.length} mẫu training từ Swagger`);
    } catch (error) {
      console.error('❌ Lỗi khi khởi tạo từ Swagger:', error);
      throw error;
    }
  }

  public async initializeAI(): Promise<void> {
    try {
      this.vocabulary = await getOrCreateVocabulary(this._trainingData);
      this.model = await getOrCreateTrainedModel(this._trainingData);
      this.isModelLoaded = true;
      console.log('✅ AIUserIdResolver đã sẵn sàng!');
    } catch (error) {
      console.error('❌ Lỗi khởi tạo AI:', error);
      throw error;
    }
  }

  private generateTrainingDataFromSwagger(swaggerJson: any): TrainingData[] {
    const trainingData: TrainingData[] = [];
    if (!swaggerJson || typeof swaggerJson !== 'object') {
      console.warn('⚠️ Swagger JSON không hợp lệ');
      return trainingData;
    }

    Object.entries(swaggerJson).forEach(([schemaName, schema]: [string, any]) => {
      if (!schema?.properties?.userId) {
        console.log(`ℹ️ Schema ${schemaName} không có trường userId, bỏ qua`);
        return;
      }
      try {
        const action = this.normalizeActionName(schemaName);
        if (!action) {
          console.warn(`⚠️ Bỏ qua schema ${schemaName} do không xác định được action`);
          return;
        }
        const contextClues = this.extractContextClues(schemaName, schema);
        const actionInfo = this.getHttp(action);
        const apiEndpoint = actionInfo?.path || '';
        const httpMethod = actionInfo?.method || 'POST';
        trainingData.push({
          action,
          schemaId: schemaName,
          swaggerDesc: schema.properties?.userId.description || '',
          contextClues,
          apiEndpoint,
          httpMethod,
        });
      } catch (error) {
        console.warn(`❌ Lỗi khi xử lý schema ${schemaName}:`, error);
      }
    });
    return trainingData;
  }

  private normalizeActionName(schemaName: string): string | null {
    if (!schemaName || !schemaName.endsWith('Request')) {
      return null;
    }
    return schemaName.replace('V3', '').replace('Request', '');
  }

  private getHttp(action: string | null): ActionConfig | null {
    if (!action) return null;
    const toCamelCase = action
      .replace(/([A-Z]+)(?=[A-Z][a-z])/g, (match) => {
        if (match === 'DM') return 'Dm';
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
      })
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map((word, index) => (index === 0 ? word.toLowerCase() : word))
      .join('');
    const actionInfo = ACTION_CONFIG[toCamelCase as keyof typeof ACTION_CONFIG];
    if (!actionInfo) {
      console.warn(`Action config not found for: ${toCamelCase}`);
      return null;
    }
    return actionInfo;
  }

  private extractContextClues(schemaName: string, schema: any): string[] {
    const clues = new Set<string>();
    if (schemaName) {
      schemaName.split(/(?=[A-Z])/).forEach((part) => {
        clues.add(part.toLowerCase());
      });
    }
    const desc = schema?.properties?.userId?.description || '';
    desc
      .toLowerCase()
      .split(/[\s,.;]+/)
      .filter((word) => word.length > 3)
      .forEach((word) => clues.add(word));
    return Array.from(clues);
  }

  public async autoGenerateTrainingDataFromSchema(schemaName: string): Promise<TrainingData | null> {
    if (!schemaName) {
      console.warn('⚠️ schemaName không hợp lệ');
      return null;
    }
    const schema = (schemas as Record<string, any>)[schemaName];
    if (!schema || !schema.properties || !schema.properties.userId) {
      console.log(`ℹ️ Schema ${schemaName} không có trường userId`);
      return null;
    }
    const actionName = schemaName.replace(/Request$/, '').replace(/^V3/, '');
    const description = schema.description || schema.properties.userId.description || '';
    const action = this.normalizeActionName(schemaName);
    const actionInfo = this.getHttp(action);
    return {
      action: actionName,
      apiEndpoint: actionInfo?.path || '',
      swaggerDesc: description,
      contextClues: this.extractKeywords(description),
      httpMethod: actionInfo?.method || 'POST',
      schemaId: schemaName,
    };
  }

  private extractKeywords(text: string): string[] {
    if (!text) return [];
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((word) => word.length > 3);
    const keywords = new Set<string>();
    const patterns = [
      /send.*to|recipient|receive|destination|block.*user|unblock.*user|report.*user/i,
      /accept.*from|request.*from|sender/i,
    ];
    words.forEach((word) => {
      if (['send', 'to', 'accept', 'from', 'block', 'unblock', 'report'].includes(word)) {
        keywords.add(word);
      }
    });
    patterns.forEach((pattern) => {
      if (pattern.test(text)) {
        const matches = text.match(pattern) || [];
        matches.forEach((match) => {
          match.split(/\s+/).forEach((w) => {
            if (w.length > 3) keywords.add(w.toLowerCase());
          });
        });
      }
    });
    return Array.from(keywords);
  }

  public async predictUserIdMeaning(
    actionName: string,
    swaggerDesc: string = '',
    endpoint: string = '',
    method: string = 'POST'
  ): Promise<PredictionResult> {
    if (!this.isModelLoaded || !this.model || !this.vocabulary) {
      throw new Error('AI chưa được khởi tạo. Gọi initializeAI() trước.');
    }
    const features = createFeatureVector(actionName, swaggerDesc, endpoint, method, this.vocabulary);
    const inputTensor = tf.tensor2d([features]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const probabilities = await prediction.data();
    const labels = ['sender', 'receiver'];
    const maxIndex = probabilities.indexOf(Math.max(...probabilities));
    const confidence = probabilities[maxIndex];
    inputTensor.dispose();
    prediction.dispose();
    return {
      userIdMeaning: labels[maxIndex],
      confidence,
      probabilities: { sender: probabilities[0], receiver: probabilities[1] },
      reasoning: `Dự đoán ${labels[maxIndex]} với ${(confidence * 100).toFixed(1)}%`,
      method: 'ai',
      suggestedVariableName: this.generateVariableName(labels[maxIndex]),
    };
  }

  public async resolveUserIdContext(
    actionName: string,
    swaggerSchema: any = {},
    endpoint: string = '',
    method: string | METHOD
  ): Promise<PredictionResult> {
    try {
      const normalizedMethod =
        typeof method === 'string'
          ? method.toLowerCase()
          : METHOD[method as keyof typeof METHOD].toString().toLowerCase();
      const aiResult = await this.predictUserIdMeaning(
        actionName,
        swaggerSchema.description || this.getTrainingDescription(actionName),
        endpoint,
        normalizedMethod
      );
      if (aiResult.confidence < 0.8) {
        const ruleResult = this.fallbackToRules(actionName, swaggerSchema);
        return {
          userIdMeaning: ruleResult.userIdMeaning,
          confidence: ruleResult.confidence,
          reasoning: `Hybrid: ${ruleResult.reasoning} | AI: ${aiResult.reasoning}`,
          method: 'hybrid',
          suggestedVariableName: this.generateVariableName(ruleResult.userIdMeaning),
        };
      }
      return {
        ...aiResult,
        method: 'ai',
        suggestedVariableName: this.generateVariableName(aiResult.userIdMeaning),
      };
    } catch (error) {
      console.error('❌ Dự đoán thất bại:', error);
      return this.fallbackToRules(actionName, swaggerSchema);
    }
  }

  private getTrainingDescription(action: string): string {
    const trainingData = this._trainingData.find((data) => data.action === action);
    return trainingData ? trainingData.swaggerDesc : '';
  }

  private fallbackToRules(actionName: string, swaggerSchema: any): PredictionResult {
    if (swaggerSchema?.properties?.userId?.description) {
      const desc = swaggerSchema.properties.userId.description.toLowerCase();
      const meaning = guessUserIdMeaning(actionName, desc);
      return {
        userIdMeaning: meaning,
        confidence: 0.85,
        method: 'schema-analysis',
        reasoning: `Phân tích tự động từ schema description: ${desc}`,
        suggestedVariableName: this.generateVariableName(meaning),
      };
    }
    const desc = (swaggerSchema.description || this.getTrainingDescription(actionName)).toLowerCase();
    const action = actionName.toLowerCase();
    const fullText = `${action} ${desc}`;
    const patterns = {
      sender: [
        /accept.*from|request.*from|reject.*from|reject.*request|sender.*request|accept.*request|delete.*request|report.*message/i,
        /who.*sent|sender/i,
        /person.*who.*sent/i,
        /user.*sent.*request/i,
      ],
      receiver: [
        /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to|add.*friend|forward.*message|mark.*read|whom|block.*user|unblock.*user|report.*user/i,
        /who.*receive|who.*will.*receive|for.*user|to.*user/i,
        /identifies.*recipient|user.*receive/i,
      ],
    };
    for (const pattern of patterns.sender) {
      if (pattern.test(fullText)) {
        return {
          userIdMeaning: 'sender',
          confidence: 0.95,
          method: 'rules',
          reasoning: `Dựa trên quy tắc: Mẫu "${pattern.source}" khớp`,
          suggestedVariableName: this.generateVariableName('sender'),
        };
      }
    }
    for (const pattern of patterns.receiver) {
      if (pattern.test(fullText)) {
        return {
          userIdMeaning: 'receiver',
          confidence: 0.9,
          method: 'rules',
          reasoning: `Dựa trên quy tắc: Mẫu "${pattern.source}" khớp`,
          suggestedVariableName: this.generateVariableName('receiver'),
        };
      }
    }
    return {
      userIdMeaning: 'sender',
      confidence: 0.5,
      method: 'rules',
      reasoning: 'Fallback mặc định: Không phát hiện mẫu rõ ràng',
      suggestedVariableName: this.generateVariableName('sender'),
    };
  }

  private generateVariableName(userIdMeaning: string): string {
    const varMapping: Record<string, string> = {
      sender: VAR.userId,
      receiver: VAR.userId1,
    };
    return varMapping[userIdMeaning] || VAR.userId;
  }

  public addTrainingData(data: TrainingData): void {
    if (!data.action || !data.swaggerDesc) {
      console.warn('⚠️ Dữ liệu huấn luyện không hợp lệ:', data);
      return;
    }
    const exists = this._trainingData.some((t) => t.action === data.action);
    if (!exists) {
      this._trainingData.push(data);
      // Reset model và vocabulary để retrain sau
      this.vocabulary = null;
      this.model = null;
      this.isModelLoaded = false;
    }
  }

  public getTrainingData(): TrainingData[] {
    return [...this._trainingData];
  }
}

interface Step {
  name: string;
  mainActions: any[];
  beforeAllActions: any[];
  afterAllActions: any[];
}

class AIEnhancedDTOBuilder {
  private static aiResolverInstance: AIUserIdResolver | null = null;
  private steps: Step[] = [];
  private currentStep: Step | null = null;
  private aiInitialized: boolean = false;
  private pendingActions: Array<() => Promise<void>> = [];
  private trainingDataThreshold: number = 10; // Ngưỡng để retrain model

  async ensureAIInitialized(): Promise<void> {
    if (!this.aiInitialized) {
      if (!AIEnhancedDTOBuilder.aiResolverInstance) {
        AIEnhancedDTOBuilder.aiResolverInstance = new AIUserIdResolver();
        await AIEnhancedDTOBuilder.aiResolverInstance.initializeFromSwagger();
        await AIEnhancedDTOBuilder.aiResolverInstance.initializeAI();
      }
      this.aiInitialized = true;
    }
  }

  startStep(stepName: string): this {
    if (!stepName) {
      console.warn('⚠️ stepName không hợp lệ');
      return this;
    }
    this.currentStep = {
      name: stepName,
      mainActions: [],
      beforeAllActions: [],
      afterAllActions: [],
    };
    return this;
  }

  private async addActionInternal(
    name: string,
    key: string,
    action: string,
    config: any,
    actionType: 'main' | 'beforeAll' | 'afterAll'
  ): Promise<void> {
    if (!name || !key || !action) {
      console.warn(`⚠️ Tham số không hợp lệ: name=${name}, key=${key}, action=${action}`);
      return;
    }

    await this.ensureAIInitialized();
    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
    if (!actionInfo) {
      console.error(`❌ Action ${action} not found in ACTION_CONFIG`);
      throw new Error(`Action ${action} not found`);
    }

    const schemaName = this.generateSchemaName(action);
    const schema = (schemas as Record<string, any>)[schemaName];
    let shouldRetrain = false;

    if (AIEnhancedDTOBuilder.aiResolverInstance && schema?.properties?.userId) {
      const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
      if (
        !AIEnhancedDTOBuilder.aiResolverInstance.getTrainingData().some((t) => t.action === normalizedAction)
      ) {
        const newTraining = await AIEnhancedDTOBuilder.aiResolverInstance.autoGenerateTrainingDataFromSchema(schemaName);
        if (newTraining) {
          AIEnhancedDTOBuilder.aiResolverInstance.addTrainingData(newTraining);
          // Chỉ retrain nếu số lượng dữ liệu mới vượt ngưỡng
          const newDataCount = AIEnhancedDTOBuilder.aiResolverInstance.getTrainingData().length;
          if (newDataCount % this.trainingDataThreshold === 0) {
            shouldRetrain = true;
          }
        }
      }
    }

    if (shouldRetrain) {
      await AIEnhancedDTOBuilder.aiResolverInstance.initializeAI();
    }

    const processedBody = await this.processBodyWithAI(action, config.body || {}, schema, actionInfo);

    const finalHeaders = {
      ...(processedBody.headers || {}),
      ...(config.headers || {}),
    };

    if (!this.currentStep) {
      this.currentStep = {
        name,
        mainActions: [],
        beforeAllActions: [],
        afterAllActions: [],
      };
    }

    const actionObject = {
      name,
      key,
      action,
      headers: finalHeaders,
      config: {
        ...config,
        method: actionInfo.method,
        path: actionInfo.path,
        body: processedBody,
        schema: schemaName,
        metadata: { ...config.metadata },
      },
    };

    switch (actionType) {
      case 'main':
        this.currentStep.mainActions.push(actionObject);
        break;
      case 'beforeAll':
        this.currentStep.beforeAllActions.push(actionObject);
        break;
      case 'afterAll':
        this.currentStep.afterAllActions.push(actionObject);
        break;
    }
  }

  addActionAI(name: string, key: string, action: string, config: any = {}): this {
    this.pendingActions.push(() => this.addActionInternal(name, key, action, config, 'main'));
    return this;
  }

  addBeforeAllActionAI(name: string, key: string, action: string, config: any = {}): this {
    this.pendingActions.push(() => this.addActionInternal(name, key, action, config, 'beforeAll'));
    return this;
  }

  addAfterAllActionAI(name: string, key: string, action: string, config: any = {}): this {
    this.pendingActions.push(() => this.addActionInternal(name, key, action, config, 'afterAll'));
    return this;
  }

  async execute(): Promise<any> {
    for (const pendingAction of this.pendingActions) {
      try {
        await pendingAction();
      } catch (error) {
        console.error('❌ Lỗi khi thực thi action:', error);
      }
    }
    this.pendingActions = [];
    if (this.currentStep) {
      this.steps.push(this.currentStep);
      this.currentStep = null;
    }

    const result = {
      steps: this.steps.map((step) => ({
        name: step.name,
        actions: {
          main: step.mainActions,
          beforeAll: step.beforeAllActions,
          afterAll: step.afterAllActions,
        },
      })),
      metadata: {
        generatedAt: new Date().toISOString(),
        aiEnhanced: this.aiInitialized,
        totalSteps: this.steps.length,
        totalActions: this.steps.reduce(
          (sum, step) =>
            sum + step.mainActions.length + step.beforeAllActions.length + step.afterAllActions.length,
          0
        ),
      },
    };

    console.log('🏁 Hoàn tất tạo DTO:', {
      steps: result.metadata.totalSteps,
      actions: result.metadata.totalActions,
      aiEnhanced: result.metadata.aiEnhanced,
    });
    return result;
  }

  private generateSchemaName(action: string): string {
    return toInterfaceName(action);
  }

  private async processBodyWithAI(
    action: string,
    originalBody: any,
    schema: any,
    actionInfo: ActionConfig
  ): Promise<ProcessedBody> {
    const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
    const processedBody: ProcessedBody = { metadata: { resolvedFields: {} } };

    let userIdPrediction: PredictionResult | null = null;
    let hasUserIdField = false;

    const resolvedSchema = resolveSchema(schema, schemas);
    console.log('resolve schema', JSON.stringify(resolvedSchema, null,2))
    if (!resolvedSchema || !resolvedSchema.properties) {
      console.warn(`⚠️ Không tìm thấy thuộc tính schema cho ${action}, sử dụng mô tả fallback`);
      if (action === 'deleteMockedUsers' || schema?.schema === 'V3DeleteMockedUsersRequest') {
        processedBody.prefix = CONST.prefix;
        processedBody.metadata!.resolvedFields.prefix = {
          originalValue: 'prefix',
          resolvedValue: CONST.prefix,
          isRequired: true,
          propKey: 'prefix',
          propType: 'string',
          description: 'Prefix for deleting mocked users',
        };
      }
    } else {
      for (const [propKey, propValue] of Object.entries(resolvedSchema.properties || {}) as [string, any]) {
        const isRequired = resolvedSchema?.required?.includes(propKey) || false;

        // Tạo metadata cho property
        processedBody.metadata!.resolvedFields[propKey] = {
          originalValue: undefined,
          resolvedValue: undefined,
          isRequired,
          propKey,
          propType: propValue.type,
          description: propValue.description || '',
        };

        if (propKey === 'userId' && AIEnhancedDTOBuilder.aiResolverInstance) {
          hasUserIdField = true;
          const aiResult = await AIEnhancedDTOBuilder.aiResolverInstance.resolveUserIdContext(
            normalizedAction,
            { description: propValue.description || '' },
            actionInfo.path,
            actionInfo.method
          );
          userIdPrediction = aiResult;
          processedBody[propKey] = aiResult.suggestedVariableName;
          processedBody.metadata!.resolvedFields[propKey] = {
            ...processedBody.metadata!.resolvedFields[propKey],
            originalValue: 'userId',
            resolvedValue: processedBody[propKey],
            aiResult,
          };
        } else {
          // Xử lý recursive tất cả các property
          processedBody[propKey] = this.resolvePropertyValue(propKey, propValue);
          processedBody.metadata!.resolvedFields[propKey].resolvedValue = processedBody[propKey];
        }
      }

      if (schema.schema === 'V3DeleteMockedUsersRequest') {
        processedBody.prefix = CONST.prefix;
        processedBody.metadata!.resolvedFields.prefix = {
          originalValue: 'prefix',
          resolvedValue: CONST.prefix,
          isRequired: true,
          propKey: 'prefix',
          propType: 'string',
          description: 'Prefix for deleting mocked users',
        };
      }
    }

    const headerKey = 'x-session-token';
    let headerValue = VAR.token;
    if (hasUserIdField && userIdPrediction) {
      headerValue = userIdPrediction.userIdMeaning === 'receiver' ? VAR.token1 : VAR.token;
    }

    processedBody.headers = {
      ...processedBody.headers,
      [headerKey]: headerValue,
    };

    processedBody.metadata!.resolvedFields.headers = {
      originalValue: 'auto-generated',
      resolvedValue: { [headerKey]: headerValue },
      reasoning: hasUserIdField
        ? `Header tự động thêm dựa trên userId là ${userIdPrediction?.userIdMeaning || 'unknown'}`
        : 'Header mặc định (sender) vì không có trường userId trong body',
      aiResult: userIdPrediction,
    };

    return processedBody;
  }


  private resolvePropertyValue(propKey: string, propSchema: any): any {
    console.log(propSchema)
    // 1. Kiểm tra trong CONST trước
    const constValue = CONST[propKey as keyof typeof CONST];
    if (constValue !== undefined) {
      return constValue;
    }

    // 2. Xử lý theo type của property
    switch (propSchema.type) {
      case 'array':
        return this.resolveArrayProperty(propKey, propSchema);
      case 'object':
        return this.resolveObjectProperty(propKey, propSchema);
      default:
        return this.getDefaultValueForProperty(propKey, propSchema);
    }
  }

  /**
   * Xử lý property kiểu array
   */
  private resolveArrayProperty(propKey: string, propSchema: any): any[] {
    if (!propSchema.items) {
      return [];
    }

    // Tạo 1 phần tử trong array để demo
    const itemValue = this.resolvePropertyValue(propKey, propSchema.items);
    console.log('array valu', itemValue)
    return [itemValue];

  }

  /**
   * Xử lý property kiểu object
   */
  private resolveObjectProperty(propKey: string, propSchema: any): any {
    if (!propSchema.properties) {
      return {};
    }

    const result: any = {};
    for (const [nestedPropKey, nestedPropSchema] of Object.entries(propSchema.properties) as [string, any]) {
      result[nestedPropKey] = this.resolvePropertyValue(nestedPropKey, nestedPropSchema);
    }
    return result;
  }

  private getDefaultValueForProperty(propKey: string, propSchema: any): any {
    console.log('propKey', propKey)
    const value = CONST[propKey as keyof typeof CONST];
    if (!value) {
      console.warn(`⚠️ PropKey not found in CONST: ${propKey}`);
      return undefined;
    }
    return value;
  }
}

export function createAIEnhancedDTO(): AIEnhancedDTOBuilder {
  return new AIEnhancedDTOBuilder();
}

// Hàm tiện ích để kiểm tra file tồn tại
async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch {
    return false;
  }
}