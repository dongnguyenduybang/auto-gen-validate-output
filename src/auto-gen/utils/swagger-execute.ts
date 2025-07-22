import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import {
  createFeatureVector,
  getOrCreateTrainedModel,
  getOrCreateVocabulary,
  guessUserIdMeaning,
} from './ai-service';
import { PredictionResult, TrainingData } from '../types/prediction.types';
import { ActionConfig } from '../types/api.types';
import { ProcessedBody } from '../types/shared.types';
import { resolveSchema } from '../helpers/resolve-helpers';
import { toInterfaceName } from '../helpers/file-matching';
import schemas from '../swagger/hono.swagger.json';
import schemas1 from '../swagger/swagger-json/hono/faker.swagger.json';
import { ACTION_CONFIG, CONST, METHOD, VAR } from './get-config';

const readFile = promisify(fs.readFile);
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
      const swaggerPath = path.resolve(__dirname, '../swagger/hono.swagger.json');
      if (!(await exists(swaggerPath))) {
        throw new Error(`The Swagger file does not exist at: ${swaggerPath}`);
      }
      const fileContent = await readFile(swaggerPath, 'utf-8');
      const swaggerJson = JSON.parse(fileContent);
      this._trainingData = this.generateTrainingDataFromSwagger(swaggerJson);
      console.log(`✅ Loaded ${this._trainingData.length} Swagger training sample`);
    } catch (error) {
      console.error('❌ Error when initializing from Swagger:', error);
      throw error;
    }
  }

  public async initializeAI(): Promise<void> {
    try {
      this.vocabulary = await getOrCreateVocabulary(this._trainingData);
      this.model = await getOrCreateTrainedModel(this._trainingData);
      this.isModelLoaded = true;
      console.log('✅ AIUserIdResolver is ready!');
    } catch (error) {
      console.error('❌ AI initialization error:', error);
      throw error;
    }
  }

  private generateTrainingDataFromSwagger(swaggerJson: any): TrainingData[] {
    const trainingData: TrainingData[] = [];
    if (!swaggerJson || typeof swaggerJson !== 'object') {
      console.warn('⚠️ Invalid Swagger JSON');
      return trainingData;
    }

    Object.entries(swaggerJson.components.schemas).forEach(([schemaName, schema]: [string, any]) => {
      try {
        const action = this.normalizeActionName(schemaName);
        if (!action) {
          console.warn(`⚠️ Ignore schema ${schemaName} due to undefined action`);
          return;
        }
        const contextClues = this.extractContextClues(schemaName, schema);
        const actionInfo = this.getHttp(action);
        const apiEndpoint = actionInfo?.path || '';
        const httpMethod = actionInfo?.method || 'POST';

        // Kiểm tra các trường user-related (userId hoặc fieldName)
        const userField = schema?.properties?.userId
          ? 'userId'
          : Object.keys(schema?.properties || {}).find((key) =>
            /userId|authorId|targetUserId|recipientId/i.test(key)
          ) || 'userId'; // Fallback to 'userId' if no user-related field
        const userIdDescription = schema?.properties?.[userField]?.description || schema.description || '';
        const userIdMeaning = schema?.properties?.[userField]
          ? guessUserIdMeaning(action, userIdDescription)
          : this.inferUserIdMeaningFromContext(action, schema.description || '', apiEndpoint);

        trainingData.push({
          action,
          schemaId: schemaName,
          swaggerDesc: userIdDescription,
          contextClues,
          apiEndpoint,
          httpMethod,
          fieldName: userField,
          userIdMeaning,
        });
      } catch (error) {
        console.warn(`❌ Error processing schema ${schemaName}:`, error);
      }
    });
    return trainingData;
  }

  private inferUserIdMeaningFromContext(action: string, description: string, endpoint: string): 'sender' | 'receiver' {
    const fullText = `${action} ${description} ${endpoint}`.toLowerCase();
    const receiverPatterns = [
      /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to/i,
      /add.*friend|cancel.*request|unfriend|assign.*admin|dismiss.*admin/i,
      /ban.*channel|unban.*channel|report.*user|block.*user|unblock.*user/i,
      /poke.*message|pin.*message|quote.*message|forward.*message/i,
      /mark.*read|update.*message|add.*reaction|revoke.*reaction/i,
      /whom|for.*user|to.*user|identifies.*recipient/i,
      /accept.*invitation|join.*group|join.*channel/i,
    ];
    const senderPatterns = [
      /accept.*from|request.*from|reject.*from|reject.*request/i,
      /sender.*request|accept.*request|delete.*request|report.*message/i,
      /who.*sent|sender|person.*who.*sent|user.*sent.*request/i,
    ];

    for (const pattern of receiverPatterns) {
      if (pattern.test(fullText)) return 'receiver';
    }
    for (const pattern of senderPatterns) {
      if (pattern.test(fullText)) return 'sender';
    }

    if (/accept|join/i.test(action.toLowerCase())) {
      return 'receiver';
    }
    return 'sender';
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
      console.warn(`⚠️ Action config not found for: ${toCamelCase}`);
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
    const userField = schema?.properties?.userId
      ? 'userId'
      : Object.keys(schema?.properties || {}).find((key) =>
        /userId|authorId|targetUserId|recipientId/i.test(key)
      ) || 'userId';
    const desc = schema?.properties?.[userField]?.description || schema.description || '';
    desc
      .toLowerCase()
      .split(/[\s,.;]+/)
      .filter((word) => word.length > 3)
      .forEach((word) => clues.add(word));
    return Array.from(clues);
  }

  public async autoGenerateTrainingDataFromSchema(schemaName: string): Promise<TrainingData | null> {
    if (!schemaName) {
      console.warn('⚠️ Invalid schemaName');
      return null;
    }
    const schema = (schemas.components.schemas as Record<string, any>)[schemaName];
    if (!schema || !schema.properties) {
      console.log(`ℹ️ Schema ${schemaName} not valid`);
      return null;
    }
    const actionName = schemaName.replace(/Request$/, '').replace(/^V3/, '');
    const action = this.normalizeActionName(schemaName);
    const actionInfo = this.getHttp(action);
    const userField = schema?.properties?.userId
      ? 'userId'
      : Object.keys(schema?.properties || {}).find((key) =>
        /userId|authorId|targetUserId|recipientId/i.test(key)
      ) || 'userId';
    const description = schema?.properties?.[userField]?.description || schema.description || '';
    const userIdMeaning = schema?.properties?.[userField]
      ? guessUserIdMeaning(actionName, description)
      : this.inferUserIdMeaningFromContext(actionName, description, actionInfo?.path || '');
    return {
      action: actionName,
      apiEndpoint: actionInfo?.path || '',
      swaggerDesc: description,
      contextClues: this.extractKeywords(description),
      httpMethod: actionInfo?.method || 'POST',
      schemaId: schemaName,
      fieldName: userField,
      userIdMeaning,
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
      /accept.*invitation|join.*group|join.*channel/i,
    ];
    words.forEach((word) => {
      if (['send', 'to', 'accept', 'from', 'block', 'unblock', 'report', 'invitation'].includes(word)) {
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
    method: string = '',
  ): Promise<PredictionResult> {
    if (!this.isModelLoaded || !this.model || !this.vocabulary) {
      throw new Error('AI is not initialized yet. Call initializeAI() first.');
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
      reasoning: `Forecast ${labels[maxIndex]} with ${(confidence * 100).toFixed(1)}%`,
      method: 'ai',
      suggestedVariableName: this.generateVariableName(labels[maxIndex]),
    };
  }

  public async resolveUserIdContext(
    actionName: string,
    swaggerSchema: any = {},
    endpoint: string = '',
    method: string,
    fieldName: string = 'userId'
  ): Promise<PredictionResult> {
    try {
      const normalizedMethod =
        typeof method === 'string'
          ? method.toLowerCase()
          : METHOD[method as keyof typeof METHOD].toString().toLowerCase();

      // Tìm trường user-related trong schema
      const userField = swaggerSchema?.properties?.[fieldName]
        ? fieldName
        : Object.keys(swaggerSchema?.properties || {}).find((key) =>
          /userId|authorId|targetUserId|recipientId/i.test(key)
        ) || fieldName;
      const description = swaggerSchema?.properties?.[userField]?.description || swaggerSchema.description || this.getTrainingDescription(actionName);
      const userIdMeaning = swaggerSchema?.properties?.[userField]
        ? guessUserIdMeaning(actionName, description)
        : this.inferUserIdMeaningFromContext(actionName, description, endpoint);

      const aiResult = await this.predictUserIdMeaning(
        actionName,
        description,
        endpoint,
        normalizedMethod,
      );

      if (aiResult.confidence < 0.8 || !swaggerSchema?.properties?.[userField]) {
        const ruleResult = this.fallbackToRules(actionName, swaggerSchema, endpoint, userField);
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
      console.error('❌ Prediction of failure:', error);
      return this.fallbackToRules(actionName, swaggerSchema, endpoint, fieldName);
    }
  }

  private getTrainingDescription(action: string): string {
    const trainingData = this._trainingData.find((data) => data.action === action);
    return trainingData ? trainingData.swaggerDesc : '';
  }

  private fallbackToRules(actionName: string, swaggerSchema: any, endpoint: string, fieldName: string): PredictionResult {
    const desc = (swaggerSchema?.properties?.[fieldName]?.description || swaggerSchema.description || '').toLowerCase();

    const action = actionName.toLowerCase();
    const fullText = `${action} ${desc} ${endpoint}`.toLowerCase();

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
        /accept.*invitation|join.*group|join.*channel/i,
      ],
    };

    for (const pattern of patterns.receiver) {
      if (pattern.test(fullText)) {
        return {
          userIdMeaning: 'receiver',
          confidence: 0.95,
          method: 'rules',
          reasoning: `Rule-based: Pattern "${pattern.source}" matches`,
          suggestedVariableName: this.generateVariableName('receiver'),
        };
      }
    }
    for (const pattern of patterns.sender) {
      if (pattern.test(fullText)) {
        return {
          userIdMeaning: 'sender',
          confidence: 0.95,
          method: 'rules',
          reasoning: `Rule-based: Pattern "${pattern.source}" matches`,
          suggestedVariableName: this.generateVariableName('sender'),
        };
      }
    }

    return {
      userIdMeaning: 'sender',
      confidence: 0.5,
      method: 'rules',
      reasoning: 'Default fallback: No explicit pattern detected',
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
      console.warn('⚠️ Invalid training data:', data);
      return;
    }
    const exists = this._trainingData.some((t) => t.action === data.action);
    if (!exists) {
      this._trainingData.push(data);
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
  private trainingDataThreshold: number = 10;

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
      console.warn('⚠️ StepName is invalid');
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
    actionType: 'main' | 'beforeAll' | 'afterAll',
  ): Promise<void> {
    if (!name || !key || !action) {
      console.warn(
        `⚠️ Invalid parameter: name=${name}, key=${key}, action=${action}`,
      );
      return;
    }

    await this.ensureAIInitialized();
    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
    if (!actionInfo) {
      console.error(`❌ Action ${action} not found in ACTION_CONFIG`);
      throw new Error(`Action ${action} not found`);
    }

    const schemaName = this.generateSchemaName(action);
    const schema = (schemas.components.schemas as Record<string, any>)[
      schemaName
    ];
    let shouldRetrain = false;

    if (AIEnhancedDTOBuilder.aiResolverInstance && schema?.properties?.userId) {
      const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
      if (
        !AIEnhancedDTOBuilder.aiResolverInstance
          .getTrainingData()
          .some((t) => t.action === normalizedAction)
      ) {
        const newTraining =
          await AIEnhancedDTOBuilder.aiResolverInstance.autoGenerateTrainingDataFromSchema(
            schemaName,
          );
        if (newTraining) {
          AIEnhancedDTOBuilder.aiResolverInstance.addTrainingData(newTraining);

          const newDataCount =
            AIEnhancedDTOBuilder.aiResolverInstance.getTrainingData().length;
          if (newDataCount % this.trainingDataThreshold === 0) {
            shouldRetrain = true;
          }
        }
      }
    }

    if (shouldRetrain) {
      await AIEnhancedDTOBuilder.aiResolverInstance.initializeAI();
    }

    const processedBody = await this.processBodyWithAI(
      action,
      config.body || {},
      schema,
      actionInfo,
    );

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

  addActionAI(
    name: string,
    key: string,
    action: string,
    config: any = {},
  ): this {
    this.pendingActions.push(() =>
      this.addActionInternal(name, key, action, config, 'main'),
    );
    return this;
  }

  addBeforeAllActionAI(
    name: string,
    key: string,
    action: string,
    config: any = {},
  ): this {
    this.pendingActions.push(() =>
      this.addActionInternal(name, key, action, config, 'beforeAll'),
    );
    return this;
  }

  addAfterAllActionAI(
    name: string,
    key: string,
    action: string,
    config: any = {},
  ): this {
    this.pendingActions.push(() =>
      this.addActionInternal(name, key, action, config, 'afterAll'),
    );
    return this;
  }

  async execute(): Promise<any> {
    for (const pendingAction of this.pendingActions) {
      try {
        await pendingAction();
      } catch (error) {
        console.error('❌ Error when executing action:', error);
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
            sum +
            step.mainActions.length +
            step.beforeAllActions.length +
            step.afterAllActions.length,
          0,
        ),
      },
    };

    console.log('🏁 Hoàn tất tạo DTO:', {
      steps: result.metadata.totalSteps,
      actions: result.metadata.totalActions,
      aiEnhanced: result.metadata.aiEnhanced,
    });
    console.log(JSON.stringify(result, null, 2))
    return result;
  }

  private generateSchemaName(action: string): string {
    return toInterfaceName(action);
  }

  private async processBodyWithAI(
    action: string,
    originalBody: any,
    schema: any,
    actionInfo: ActionConfig,
  ): Promise<ProcessedBody> {
    const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
    const processedBody: ProcessedBody = { metadata: { resolvedFields: {} } };
    let userIdPrediction: PredictionResult | null = null;
    let hasUserIdField = false;
    const resolvedSchema = resolveSchema(action, [schemas, schemas1]);
    // First, try to get userId prediction regardless of schema
    if (AIEnhancedDTOBuilder.aiResolverInstance) {
      try {
        userIdPrediction = await AIEnhancedDTOBuilder.aiResolverInstance.resolveUserIdContext(
          normalizedAction,
          { description: schema?.description || '' },
          actionInfo.path,
          actionInfo.method,
        );
      } catch (error) {
        console.error(`Failed to resolve userId context for action ${action}:`, error);
      }
    }

    if (!resolvedSchema || !resolvedSchema.properties) {
      console.warn(
        `⚠️ No schema attribute found for ${action}, use fallback description`,
      );
      if (
        action === 'deleteMockedUsers'
      ) {
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
      if (action === 'mockUsers') {
        processedBody.prefix = CONST.prefix;
        processedBody.quantity = CONST.quantity;
        processedBody.badge = CONST.badge;
        processedBody.metadata!.resolvedFields.prefix = {
          originalValue: 'prefix',
          resolvedValue: CONST.prefix,
          isRequired: true,
          propKey: 'prefix',
          propType: 'string',
          description: 'Prefix for mocked users',
        };
        processedBody.metadata!.resolvedFields.badge = {
          originalValue: 'badge',
          resolvedValue: CONST.badge,
          isRequired: true,
          propKey: 'badge',
          propType: 'integer',
          description: 'badge for mocked users',
        };
        processedBody.metadata!.resolvedFields.quantity = {
          originalValue: 'quantity',
          resolvedValue: CONST.quantity,
          isRequired: true,
          propKey: 'quantity',
          propType: 'integer',
          description: 'The number of accounts you want to create.',
        };
      }
    } else {
      for (const [propKey, propValue] of Object.entries(
        resolvedSchema.properties || {},
      ) as [string, any]) {
        const isRequired = resolvedSchema?.required?.includes(propKey) || false;

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
          try {
            const aiResult =
              await AIEnhancedDTOBuilder.aiResolverInstance.resolveUserIdContext(
                normalizedAction,
                { description: propValue.description || '' },
                actionInfo.path,
                actionInfo.method,
              );
            userIdPrediction = aiResult;
            processedBody[propKey] = aiResult.suggestedVariableName;
            processedBody.metadata!.resolvedFields[propKey] = {
              ...processedBody.metadata!.resolvedFields[propKey],
              originalValue: 'userId',
              resolvedValue: processedBody[propKey],
              aiResult,
            };
          } catch (error) {
            console.error(`Failed to resolve userId context for ${propKey}:`, error);
            processedBody[propKey] = this.resolvePropertyValue(propKey, propValue, action);
            processedBody.metadata!.resolvedFields[propKey].resolvedValue = processedBody[propKey];
          }

        } else {
          try {
            processedBody[propKey] = this.resolvePropertyValue(
              propKey,
              propValue,
              action,
            );
            processedBody.metadata!.resolvedFields[propKey].resolvedValue =
              processedBody[propKey];
          } catch (error) {
            console.warn(`Failed to resolve property ${propKey}:`, error);
            processedBody[propKey] = null;
            processedBody.metadata!.resolvedFields[propKey].resolvedValue = null;
            processedBody.metadata!.resolvedFields[propKey].reasoning =
              `Failed to resolve ${propKey} due to missing constant or error`;
          }

        }
      }
    }

    const headerKey = 'x-session-token';
    let headerValue = VAR.token;
    let reasoning = 'Default header (sender) because there is no userId or AI prediction field';

    if (userIdPrediction) {
      headerValue = userIdPrediction.userIdMeaning === 'receiver' ? VAR.token : VAR.token1;
      reasoning = `Header automatically added (opposite to userId): ${userIdPrediction.userIdMeaning === 'receiver' ? 'sender' : 'receiver'
        }`;
    } else if (hasUserIdField) {

      headerValue = VAR.token1;
      reasoning = 'Default header for receiver (because there is userId field but no AI prediction)';
    } else {
      // Fallback heuristic khi không có userId field và không có prediction
      const isReceiverContext = (action: string, path: string) => {
        const receiverKeywords = ['accept', 'receive', 'invitation', 'join'];
        const lowerAction = action.toLowerCase();
        const lowerPath = path.toLowerCase();
        return receiverKeywords.some(keyword =>
          lowerAction.includes(keyword) || lowerPath.includes(keyword)
        );
      };

      headerValue = isReceiverContext(action, actionInfo.path) ? VAR.token1 : VAR.token;
      reasoning = `Heuristic-based Header (action: ${action}, path: ${actionInfo.path})`;
    }


    processedBody.headers = {
      ...processedBody.headers,
      [headerKey]: headerValue,
    };

    processedBody.metadata!.resolvedFields.headers = {
      originalValue: 'auto-generated',
      resolvedValue: { [headerKey]: headerValue },
      reasoning,
      aiResult: userIdPrediction,
    };

    return processedBody;
  }

  private resolvePropertyValue(
    propKey: string,
    propSchema: any,
    action: string,
  ): any {
    const constValue = CONST[propKey as keyof typeof CONST];
    if (constValue !== undefined) {
      if (propKey === 'status') {
        if (action.includes('status')) {
          return CONST.status;
        } else if (action.includes('pin')) {
          return CONST.statusPin;
        } else if (action.includes('unpin')) {
          return CONST.statusUnpin;
        }
      }

      return constValue;
    }

    switch (propSchema.type) {
      case 'array':
        return this.resolveArrayProperty(propKey, propSchema, action);
      case 'object':
        return this.resolveObjectProperty(propKey, propSchema, action);
      default:
        return this.getDefaultValueForProperty(propKey);
    }
  }

  private resolveArrayProperty(
    propKey: string,
    propSchema: any,
    action: string,
  ): any[] {
    if (!propSchema.items) {
      return [];
    }

    const itemValue = this.resolvePropertyValue(
      propKey,
      propSchema.items,
      action,
    );
    return [itemValue];
  }

  private resolveObjectProperty(
    propKey: string,
    propSchema: any,
    action: string,
  ): any {
    if (!propSchema.properties) {
      return {};
    }

    const result: any = {};
    for (const [nestedPropKey, nestedPropSchema] of Object.entries(
      propSchema.properties,
    ) as [string, any]) {
      result[nestedPropKey] = this.resolvePropertyValue(
        nestedPropKey,
        nestedPropSchema,
        action,
      );
    }
    return result;
  }

  private getDefaultValueForProperty(propKey: string): any {
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

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch {
    return false;
  }
}
