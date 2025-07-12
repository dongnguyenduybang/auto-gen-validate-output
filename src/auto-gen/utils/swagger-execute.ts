
import { ACTION, ACTION_CONFIG, METHOD, VAR } from '../enums';
import schemas from '../swagger/schemas.json';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { CONST } from '../enums/const.enum';

function toInterfaceName(requestName: string): string {
    // Tách chuỗi camelCase thành các từ
    const words = requestName
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Thêm khoảng trắng trước chữ hoa
        .split(' '); // Tách thành mảng từ

    // Chuyển thành PascalCase và xử lý từ đặc biệt
    const pascalCase = words
        .map(word => {
            if (word.toUpperCase() === 'DM') return 'DM'; // Chuyển Dm/DM/dm thành DM
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    // Thay $ trong VAR.versionSwagger bằng V3 + pascalCase
    const replaced = CONST.versionSwagger.replace('$', `${pascalCase}`);
    return replaced;
}
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const exists = promisify(fs.exists);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);

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
    userIdMeaning: string
    confidence: number;
    probabilities?: Record<string, number>;
    reasoning: string;
    method?: string;
    suggestedVariableName?: string;
}

interface ProcessedBody {
    [key: string]: any;
    metadata?: {
        resolvedFields: Record<string, {
            originalValue: any;
            resolvedValue: any;
            aiResult?: PredictionResult;
        }>;
    };
}

class AIUserIdResolver {
    private model: tf.LayersModel | null = null;
    private vocabulary: Map<string, number> = new Map();
    private isModelLoaded: boolean = false;
    protected _trainingData: TrainingData[] = [];
    private modelSavePath = path.join(__dirname, 'saved_model');
    private vocabSavePath = path.join(__dirname, 'saved_model', 'vocabulary.json');

    constructor() {
        this._trainingData = [];
    }

    public async initializeFromSwagger(): Promise<void> {
        try {
            const swaggerPath = path.resolve(__dirname, '../swagger/schemas.json');
            const fileContent = fs.readFileSync(swaggerPath, 'utf-8');
            const swaggerJson = JSON.parse(fileContent);
            this._trainingData = this.generateTrainingDataFromSwagger(swaggerJson);
            console.log(`✅ Đã tải ${this._trainingData.length} mẫu training từ Swagger`);
        } catch (error) {
            console.error('❌ Lỗi khi khởi tạo từ Swagger:', error);
            throw error;
        }
    }

    private generateTrainingDataFromSwagger(swaggerJson: any): TrainingData[] {
        const trainingData: TrainingData[] = [];
        Object.entries(swaggerJson).forEach(([schemaName, schema]: [string, any]) => {
            if (!schema.properties?.userId) return;
            try {
                const action = this.normalizeActionName(schemaName);
                const contextClues = this.extractContextClues(schemaName, schema);
                const apiEndpoint = this.getHttp(action).path;
                const httpMethod = this.getHttp(action).method;
                if (!action) {
                    console.warn(`⚠️ Bỏ qua schema ${schemaName} do thiếu thông tin`);
                    return;
                }

                const data = {
                    action,
                    schemaId: schemaName,
                    swaggerDesc: schema.properties?.userId.description || '',
                    contextClues,
                    apiEndpoint,
                    httpMethod
                };
                trainingData.push(data);
            } catch (error) {
                console.warn(`❌ Lỗi khi xử lý schema ${schemaName}:`);
            }
        });
        return trainingData;
    }

    private normalizeActionName(schemaName: string): string | null {
        // Kiểm tra nếu schemaName không kết thúc bằng 'Request'
        if (!schemaName.endsWith('Request')) {
            return null;
        } else {
            return schemaName
                .replace('V3', '') // Loại bỏ V3
                .replace('Request', ''); // Loại bỏ Request
        }


    }

    private getHttp(action: string) {
        const toCamelCase = action
            .replace(/([A-Z]+)(?=[A-Z][a-z])/g, (match) => {
                // Xử lý đặc biệt cho DM
                if (match === 'DM') return 'Dm';
                // Giữ nguyên các từ như Message, Reaction
                return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
            }) // Chuyển các đoạn chữ hoa thành dạng capitalize
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Tách các từ bằng khoảng trắng
            .split(' ') // Tách thành mảng các từ
            .map((word, index) =>
                index === 0 ? word.toLowerCase() : word // Chuyển từ đầu tiên thành chữ thường
            ) // Giữ nguyên các từ sau (đã xử lý DM, Message, Reaction)
            .join(''); // Ghép lại thành chuỗi

        const actionInfo = ACTION_CONFIG[toCamelCase as keyof typeof ACTION_CONFIG];

        if (!actionInfo) {
            console.warn(`Action config not found for: ${toCamelCase}`)
        }

        return actionInfo; // Trả về actionInfo
    }

    private extractContextClues(schemaName: string, schema: any): string[] {
        const clues = new Set<string>();
        schemaName.split(/(?=[A-Z])/).forEach(part => {
            clues.add(part.toLowerCase());
        });
        const desc = schema.properties?.userId?.description || '';
        desc.toLowerCase()
            .split(/[\s,.;]+/)
            .filter(word => word.length > 3)
            .forEach(word => clues.add(word));
        return Array.from(clues);
    }

    // private determineUserIdMeaning(schema: any, actionName: string): 'sender' | 'receiver' {
    //     const desc = (schema.properties?.userId?.description || '').toLowerCase();
    //     const fullContext = `${actionName.toLowerCase()} ${desc}`;
    //     if (desc.includes('sender') || desc.includes('who sent') || desc.includes('from user')) return 'sender';
    //     if (desc.includes('receiver') || desc.includes('recipient') || desc.includes('receive') || desc.includes('whom')) return 'receiver';
    //     if (/SEND|MESSAGE|ADD.*FRIEND|CANCEL.*REQUEST|UNFRIEND|ASSIGN.*ADMIN|DISMISS.*ADMIN|BAN.*CHANNEL|UNBAN.*CHANNEL|REPORT.*USER|BLOCK.*USER|UNBLOCK.*USER|POKE.*MESSAGE|PIN.*MESSAGE|QUOTE.*MESSAGE|FORWARD.*MESSAGE|MARK.*READ|UPDATE.*MESSAGE|ADD.*REACTION|REVOKE.*REACTION/i.test(actionName)) return 'receiver';
    //     if (/ACCEPT|REJECT|DELETE.*REQUEST|REPORT.*MESSAGE/i.test(actionName)) return 'sender';
    //     return 'sender';
    // }

    public async autoGenerateTrainingDataFromSchema(schemaName: string): Promise<TrainingData | null> {
        const schema = (schemas as Record<string, any>)[schemaName];
        if (!schema || !schema.properties || !schema.properties.userId) {
            return null;
        }
        const actionName = schemaName.replace(/Request$/, '').replace(/^V3/, '');
        const description = schema.description || schema.properties.userId.description || '';
        const action = this.normalizeActionName(schemaName);
        return {
            action: actionName,
            apiEndpoint: this.getHttp(action).path,
            swaggerDesc: description,
            contextClues: this.extractKeywords(description),
            httpMethod: this.getHttp(action).method,
            schemaId: schemaName
        };
    }

    private extractKeywords(text: string): string[] {
        const words = text.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 3);
        const keywords = new Set<string>();
        const patterns = [
            /send.*to|recipient|receive|destination|block.*user|unblock.*user|report.*user/i,
            /accept.*from|request.*from|sender/i
        ];
        words.forEach(word => {
            if (['send', 'to', 'accept', 'from', 'block', 'unblock', 'report'].includes(word)) {
                keywords.add(word);
            }
        });
        patterns.forEach(pattern => {
            if (pattern.test(text)) {
                const matches = text.match(pattern) || [];
                matches.forEach(match => {
                    match.split(/\s+/).forEach(w => {
                        if (w.length > 3) keywords.add(w.toLowerCase());
                    });
                });
            }
        });
        return Array.from(keywords);
    }

    private guessUserIdMeaning(actionName: string, description: string): 'sender' | 'receiver' {
        const fullText = `${actionName} ${description}`.toLowerCase();

        // Patterns cho receiver (người nhận)
        const receiverPatterns = [
            /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to/i,
            /add.*friend|cancel.*request|unfriend|assign.*admin|dismiss.*admin/i,
            /ban.*channel|unban.*channel|report.*user|block.*user|unblock.*user/i,
            /poke.*message|pin.*message|quote.*message|forward.*message/i,
            /mark.*read|update.*message|add.*reaction|revoke.*reaction/i,
            /whom|for.*user|to.*user|identifies.*recipient/i
        ];

        // Patterns cho sender (người gửi)
        const senderPatterns = [
            /accept.*from|request.*from|reject.*from|reject.*request/i,
            /sender.*request|accept.*request|delete.*request|report.*message/i,
            /who.*sent|sender|person.*who.*sent|user.*sent.*request/i
        ];

        // Kiểm tra patterns cho receiver
        for (const pattern of receiverPatterns) {
            if (pattern.test(fullText)) {
                return 'receiver';
            }
        }

        // Kiểm tra patterns cho sender
        for (const pattern of senderPatterns) {
            if (pattern.test(fullText)) {
                return 'sender';
            }
        }

        // Kiểm tra theo action name prefix
        const actionLower = actionName.toLowerCase();

        // Actions thường có receiver
        if (/^send|^message|^add.*friend|^cancel.*request|^unfriend|^assign.*admin|^dismiss.*admin|^ban.*channel|^unban.*channel|^report.*user|^block.*user|^unblock.*user|^poke.*message|^pin.*message|^quote.*message|^forward.*message|^mark.*read|^update.*message|^add.*reaction|^revoke.*reaction/i.test(actionLower)) {
            return 'receiver';
        }

        // Actions thường có sender
        if (/^accept|^approve|^reject|^report.*message|^delete.*request/i.test(actionLower)) {
            return 'sender';
        }

        // Default fallback
        return 'sender';
    }

    addTrainingData(data: TrainingData): void {
        const exists = this._trainingData.some(t =>
            t.action === data.action
        );
        if (!exists) {
            this._trainingData.push(data);
            this.updateVocabulary(data);
        }
    }

    async retrainModel(): Promise<void> {
        await this.createAndTrainModel();
        await this.saveModel();
    }

    getTrainingData(): TrainingData[] {
        return [...this._trainingData];
    }

    private updateVocabulary(newData: TrainingData): void {
        newData.action.toLowerCase().split('_').forEach(word => {
            if (!this.vocabulary.has(word)) {
                this.vocabulary.set(word, this.vocabulary.size + 1);
            }
        });
        newData.swaggerDesc.toLowerCase().split(/\s+/).forEach(word => {
            const cleanWord = word.replace(/[^\w]/g, '');
            if (cleanWord.length > 2 && !this.vocabulary.has(cleanWord)) {
                this.vocabulary.set(cleanWord, this.vocabulary.size + 1);
            }
        });
        newData.contextClues.forEach(clue => {
            if (!this.vocabulary.has(clue)) {
                this.vocabulary.set(clue, this.vocabulary.size + 1);
            }
        });
    }

    async saveModel(): Promise<void> {
        if (!this.model) {
            throw new Error('Không có model để lưu');
        }
        if (!await exists(this.modelSavePath)) {
            await mkdir(this.modelSavePath, { recursive: true });
        }
        const saveResult = await this.model.save(tf.io.withSaveHandler(async artifacts => {
            await writeFile(
                path.join(this.modelSavePath, 'model.json'),
                JSON.stringify(artifacts.modelTopology)
            );
            if (artifacts.weightData) {
                await writeFile(
                    path.join(this.modelSavePath, 'weights.bin'),
                    Buffer.from(artifacts.weightData as ArrayBuffer)
                );
            }
            await writeFile(
                path.join(this.modelSavePath, 'weight_specs.json'),
                JSON.stringify(artifacts.weightSpecs)
            );
            return {
                modelArtifactsInfo: {
                    dateSaved: new Date(),
                    modelTopologyType: 'JSON',
                    modelTopologyBytes: JSON.stringify(artifacts.modelTopology).length,
                    weightSpecsBytes: JSON.stringify(artifacts.weightSpecs).length,
                    weightDataBytes: artifacts.weightData ? (artifacts.weightData as ArrayBuffer).byteLength : 0
                }
            };
        }));
        const vocabObj = Object.fromEntries(this.vocabulary.entries());
        await writeFile(this.vocabSavePath, JSON.stringify(vocabObj));
        console.log('💾 Đã lưu model thành công');
    }

    async loadModel(): Promise<boolean> {
        try {
            const modelPath = path.join(this.modelSavePath, 'model.json');
            const weightsPath = path.join(this.modelSavePath, 'weights.bin');
            const weightSpecsPath = path.join(this.modelSavePath, 'weight_specs.json');
            const vocabPath = this.vocabSavePath;
            if (!(await exists(modelPath)) || !(await exists(weightsPath)) || !(await exists(weightSpecsPath))) {
                console.log('ℹ️ Không tìm thấy model đã lưu, cần train mới');
                return false;
            }
            const modelTopology = JSON.parse(await readFile(modelPath, 'utf-8'));
            const weightSpecs = JSON.parse(await readFile(weightSpecsPath, 'utf-8'));
            const weightsBuffer = await readFile(weightsPath);
            const weightData = new Uint8Array(weightsBuffer).buffer;
            this.model = await tf.loadLayersModel(tf.io.fromMemory({
                modelTopology: modelTopology,
                weightSpecs: weightSpecs,
                weightData: weightData
            }));
            const vocabData = await readFile(vocabPath, 'utf-8');
            this.vocabulary = new Map(Object.entries(JSON.parse(vocabData)));
            this.isModelLoaded = true;
            console.log('💿 Đã tải model thành công');
            return true;
        } catch (error) {
            console.error('❌ Lỗi khi tải model:', error);
            await this.clearModel();
            return false;
        }
    }

    async clearModel(): Promise<void> {
        try {
            if (await exists(this.modelSavePath)) {
                const files = await readdir(this.modelSavePath);
                await Promise.all(files.map(file =>
                    unlink(path.join(this.modelSavePath, file))
                ));
                await rmdir(this.modelSavePath);
            }
            this.model = null;
            this.isModelLoaded = false;
            console.log('🧹 Đã xóa model lưu trữ');
        } catch (error) {
            console.error('❌ Lỗi khi xóa model:', error);
        }
    }

    async initializeAI(): Promise<void> {
        console.log('🤖 Khởi tạo TensorFlow...');
        try {
            await this.clearModel(); // Xóa mô hình cũ để huấn luyện lại
            this.buildVocabulary();
            await this.createAndTrainModel();
            await this.saveModel();
            this.isModelLoaded = true;
            console.log('✅ TensorFlow mới đã được tạo và lưu!');
        } catch (error) {
            console.error('❌ Lỗi khởi tạo TensorFlow:', error);
            throw error;
        }
    }

    private getTrainingDescription(action: string): string {
        const trainingData = this._trainingData.find(data => data.action === action);
        return trainingData ? trainingData.swaggerDesc : "";
    }

    private buildVocabulary(): void {
        const allWords = new Set<string>();
        this._trainingData.forEach(data => {
            data.action.toLowerCase().split('_').forEach(word => allWords.add(word));
            data.swaggerDesc.toLowerCase().split(/\s+/).forEach(word => {
                const cleanWord = word.replace(/[^\w]/g, '');
                if (cleanWord.length > 2) allWords.add(cleanWord);
            });
            data.contextClues.forEach(clue => allWords.add(clue));
        });
        Array.from(allWords).forEach((word, index) => {
            this.vocabulary.set(word, index + 1);
        });
    }

    private textToVector(text: string, maxLength: number = 20): number[] {
        const words = text.toLowerCase()
            .replace(/([A-Z])/g, '_$1')
            .replace(/[^\w\s]/g, ' ')
            .split(/[\s_]+/)
            .filter(word => word.length > 0);
        const vector = new Array(maxLength).fill(0);
        words.forEach((word, index) => {
            if (index < maxLength && this.vocabulary.has(word)) {
                vector[index] = this.vocabulary.get(word)!;
            }
        });
        return vector;
    }

    createFeatureVector(
        actionName: string,
        swaggerDesc: string = '',
        endpoint: string = '',
        method: string = 'POST'
    ): number[] {
        const features: number[] = [];
        const actionVector = this.textToVector(actionName, 12);
        features.push(...actionVector);
        const descVector = this.textToVector(swaggerDesc, 20);
        features.push(...descVector);
        const normalizedMethod = method.toLowerCase();
        const methodEncoding: Record<string, number[]> = {
            'get': [1, 0, 0, 0],
            'post': [0, 1, 0, 0],
            'put': [0, 0, 1, 0],
            'delete': [0, 0, 0, 1]
        };
        features.push(...(methodEncoding[normalizedMethod] || [0, 0, 0, 0]));
        const endpointFeatures = [
            endpoint.includes('accept') ? 1 : 0,
            endpoint.includes('send') ? 1 : 0,
            endpoint.includes('block') ? 1 : 0,
            endpoint.includes('reaction') ? 1 : 0,
            endpoint.includes('message') ? 1 : 0,
            endpoint.includes('request') ? 1 : 0,
            endpoint.includes('follow') ? 1 : 0,
            endpoint.includes('profile') ? 1 : 0,
            endpoint.includes('forward') ? 1 : 0,
            endpoint.includes('add') ? 1 : 0,
            endpoint.includes('mark') ? 1 : 0,
        ];
        features.push(...endpointFeatures);
        const fullText = `${actionName} ${swaggerDesc} ${endpoint}`.toLowerCase();
        const semanticFeatures = [
            /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to|add.*friend|cancel.*request|unfriend|assign.*admin|dismiss.*admin|ban.*channel|unban.*channel|report.*user|block.*user|unblock.*user|poke.*message|pin.*message|quote.*message|forward.*message|mark.*read|update.*message|add.*reaction|revoke.*reaction|whom/i.test(fullText) ? 1 : 0,
            /whom.*receive|who.*will.*receive|for.*user|to.*user/i.test(fullText) ? 1 : 0,
            /accept.*from|request.*from|reject.*from|reject.*request|sender.*request|accept.*request|delete.*request|report.*message/i.test(fullText) ? 1 : 0,
            /who.*sent|sender/i.test(fullText) ? 1 : 0,
            /^send|^message|^add.*friend|^cancel.*request|^unfriend|^assign.*admin|^dismiss.*admin|^ban.*channel|^unban.*channel|^report.*user|^block.*user|^unblock.*user|^poke.*message|^pin.*message|^quote.*message|^forward.*message|^mark.*read|^update.*message|^add.*reaction|^revoke.*reaction/i.test(actionName.toLowerCase()) ? 1 : 0,
            /^accept|^reject|^delete.*request|^report.*message/i.test(actionName.toLowerCase()) ? 1 : 0,
            /^get|^fetch/i.test(actionName.toLowerCase()) ? 1 : 0,
            /^mark/i.test(actionName.toLowerCase()) ? 1 : 0
        ];
        features.push(...semanticFeatures);
        return features;
    }

    private async createAndTrainModel(): Promise<void> {
        const trainX: number[][] = [];
        const trainY: number[] = [];
        const labelMap: Record<string, number> = {
            'sender': 0,
            'receiver': 1
        };
        this._trainingData.forEach(data => {
            const features = this.createFeatureVector(
                data.action,
                data.swaggerDesc,
                data.apiEndpoint,
                data.httpMethod
            );
            trainX.push(features);
            const userIdMeaning = this.guessUserIdMeaning(data.action, data.swaggerDesc);
            trainY.push(labelMap[userIdMeaning]);
        });
        // Kiểm tra dữ liệu
        if (trainX.length === 0 || trainY.length === 0) {
            throw new Error('Không có dữ liệu training');
        }

        if (trainX.length !== trainY.length) {
            throw new Error(`Số lượng features (${trainX.length}) và labels (${trainY.length}) không khớp`);
        }

        // console.log(`🎯 Training với ${trainX.length} mẫu dữ liệu`);
        // console.log(`📊 Phân bố labels: sender=${trainY.filter(y => y === 0).length}, receiver=${trainY.filter(y => y === 1).length}`);

        const xs = tf.tensor2d(trainX);
        const ys = tf.tensor1d(trainY, 'int32');
        const ysCategorical = tf.oneHot(ys, 2);
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({
                    inputShape: [trainX[0].length],
                    units: 64,
                    activation: 'relu',
                    kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
                }),
                tf.layers.batchNormalization(),
                tf.layers.dropout({ rate: 0.5 }),
                tf.layers.dense({
                    units: 32,
                    activation: 'relu',
                    kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
                }),
                tf.layers.batchNormalization(),
                tf.layers.dropout({ rate: 0.3 }),
                tf.layers.dense({
                    units: 2,
                    activation: 'softmax'
                })
            ]
        });
        this.model.compile({
            optimizer: tf.train.adam(0.001),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
        const history = await this.model.fit(xs, ysCategorical, {
            epochs: 50, // Giảm epochs để tránh overfitting
            batchSize: Math.max(2, Math.floor(trainX.length / 4)),
            validationSplit: 0.2,
            verbose: 1,
            shuffle: true,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    if (epoch % 10 === 0) {
                        // console.log(`Epoch ${epoch}: loss=${logs?.loss?.toFixed(4)}, accuracy=${logs?.acc?.toFixed(4)}`);
                    }
                }
            }
        });

        xs.dispose();
        ys.dispose();
        ysCategorical.dispose();
    }

    async predictUserIdMeaning(
        actionName: string,
        swaggerDesc: string = '',
        endpoint: string = '',
        method: string = 'POST'
    ): Promise<PredictionResult> {
        if (!this.isModelLoaded || !this.model) {
            throw new Error('TensorFlow chưa được tải. Gọi initializeAI() trước.');
        }
        const features = this.createFeatureVector(actionName, swaggerDesc, endpoint, method);
        // console.log(features);
        const inputTensor = tf.tensor2d([features]);
        // console.log(inputTensor);
        const prediction = this.model.predict(inputTensor) as tf.Tensor;
        // console.log(prediction);
        const probabilities = await prediction.data();
        // console.log(probabilities);
        const labels = ['sender', 'receiver'];
        const maxIndex = probabilities.indexOf(Math.max(...probabilities));
        // console.log(maxIndex);
        const confidence = probabilities[maxIndex];
        // console.log(confidence);
        inputTensor.dispose();
        prediction.dispose();
        return {
            userIdMeaning: labels[maxIndex],
            confidence,
            probabilities: {
                sender: probabilities[0],
                receiver: probabilities[1]
            },
            reasoning: `Dự đoán ${labels[maxIndex]} với ${(confidence * 100).toFixed(1)}%`
        };
    }

    async resolveUserIdContext(
        actionName: string,
        swaggerSchema: any = {},
        endpoint: string = '',
        method: string | METHOD
    ): Promise<PredictionResult> {
        try {
            const normalizedMethod = typeof method === 'string'
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
                    suggestedVariableName: this.generateVariableName(ruleResult.userIdMeaning)
                };
            }
            return {
                ...aiResult,
                method: 'ai',
                suggestedVariableName: this.generateVariableName(aiResult.userIdMeaning)
            };
        } catch (error) {
            console.error('❌ Dự đoán thất bại:', error);
            return this.fallbackToRules(actionName, swaggerSchema);
        }
    }

    private fallbackToRules(actionName: string, swaggerSchema: any): PredictionResult {
        if (swaggerSchema?.properties?.userId?.description) {
            const desc = swaggerSchema.properties.userId.description.toLowerCase();
            const meaning = this.guessUserIdMeaning(actionName, desc);
            return {
                userIdMeaning: meaning,
                confidence: 0.85,
                method: 'schema-analysis',
                reasoning: `Phân tích tự động từ schema description: ${desc}`
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
                /user.*sent.*request/i
            ],
            receiver: [
                /send.*to|recipient|receive|destination|message.*to|dm.*to|direct.*to|add.*friend|forward.*message|mark.*read|whom|block.*user|unblock.*user|report.*user/i,
                /who.*receive|who.*will.*receive|for.*user|to.*user/i,
                /identifies.*recipient|user.*receive/i
            ]
        };
        for (const pattern of patterns.sender) {
            if (pattern.test(fullText)) {
                return {
                    userIdMeaning: 'sender',
                    confidence: 0.95,
                    method: 'rules',
                    reasoning: `Dựa trên quy tắc: Mẫu "${pattern.source}" khớp`
                };
            }
        }
        for (const pattern of patterns.receiver) {
            if (pattern.test(fullText)) {
                return {
                    userIdMeaning: 'receiver',
                    confidence: 0.9,
                    method: 'rules',
                    reasoning: `Dựa trên quy tắc: Mẫu "${pattern.source}" khớp`
                };
            }
        }
        return {
            userIdMeaning: 'sender',
            confidence: 0.5,
            method: 'rules',
            reasoning: 'Fallback mặc định: Không phát hiện mẫu rõ ràng'
        };
    }

    private generateVariableName(userIdMeaning: string): string {
        const varMapping: Record<string, string> = {
            'sender': VAR.userId,
            'receiver': VAR.userId1,
        };
        return varMapping[userIdMeaning]
    }
}

interface Step {
    name: string;
    mainActions: any[];
    beforeAllActions: any[];
    afterAllActions: any[];
}


class AIEnhancedDTOBuilder {
    private steps: Step[] = [];
    private currentStep: Step | null = null;
    private aiResolver: AIUserIdResolver | null = null;
    private aiInitialized: boolean = false;
    private pendingActions: Array<() => Promise<void>> = [];

    async ensureAIInitialized(): Promise<void> {
        if (!this.aiInitialized) {
            this.aiResolver = new AIUserIdResolver();
            await this.aiResolver.initializeFromSwagger();
            await this.aiResolver.initializeAI();
            this.aiInitialized = true;
        }
    }

    startStep(stepName: string): this {
        this.currentStep = {
            name: stepName,
            mainActions: [],
            beforeAllActions: [],
            afterAllActions: []
        };
        return this;
    }

    private async addActionInternal(
        name: string,
        key: string,
        action: string,
        config: any,
        actionType: 'main' | 'beforeAll' | 'afterAll' | 'beforeEach' | 'afterEach'
    ): Promise<void> {
        await this.ensureAIInitialized();
        const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
        if (!actionInfo) throw new Error(`Action ${action} not found`);
        const schemaName = this.generateSchemaName(action);
        const schema = (schemas as Record<string, any>)[schemaName];
        if (this.aiResolver && schema?.properties?.userId) {
            const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
            if (!this.aiResolver.getTrainingData().some(t => t.action === normalizedAction)) {
                const newTraining = await this.aiResolver.autoGenerateTrainingDataFromSchema(schemaName);
                if (newTraining) {
                    this.aiResolver.addTrainingData(newTraining);
                    await this.aiResolver.retrainModel();
                }
            }
        }
        const processedBody = await this.processBodyWithAI(action, config.body || action, schema, actionInfo);

        const finalHeaders = {
            ...(processedBody.headers || {}),
            ...(config.headers || {})
        };

        if (!this.currentStep) {
            this.currentStep = {
                name,
                mainActions: [],
                beforeAllActions: [],
                afterAllActions: []
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
                metadata: {
                    ...config.metadata,
                }
            }
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
            await pendingAction();
        }
        this.pendingActions = [];
        if (this.currentStep) {
            this.steps.push(this.currentStep);
            this.currentStep = null;
        }

        const result = {
            steps: this.steps.map(step => ({
                name: step.name,
                actions: {
                    main: step.mainActions,
                    beforeAll: step.beforeAllActions,
                    afterAll: step.afterAllActions
                }
            })),
            metadata: {
                generatedAt: new Date().toISOString(),
                aiEnhanced: this.aiInitialized,
                totalSteps: this.steps.length,
                totalActions: this.steps.reduce((sum, step) =>
                    sum + step.mainActions.length + step.beforeAllActions.length + step.afterAllActions.length, 0)
            }
        };

        console.log('🏁 Hoàn tất tạo DTO:', {
            steps: result.metadata.totalSteps,
            actions: result.metadata.totalActions,
            aiEnhanced: result.metadata.aiEnhanced
        });
        // console.log('ss', JSON.stringify(result, null, 2));
        return result;
    }

    private generateSchemaName(action: string): string {
        const camelCase = toInterfaceName(action);
        return camelCase;
    }

    private async processBodyWithAI(
        action: string,
        originalBody: any,
        schema: any,
        actionInfo: ActionConfig
    ): Promise<ProcessedBody> {
        const normalizedAction = action.replace(/([A-Z])/g, '_$1').toUpperCase();
        if (!schema || !schema.properties) {
            console.warn(`⚠️ Không tìm thấy thuộc tính schema cho ${action}, sử dụng mô tả fallback`);
        }
        const processedBody: ProcessedBody = {};
        const metadata: any = { resolvedFields: {} };

        // Biến lưu trữ kết quả dự đoán userId để sử dụng cho header
        let userIdPrediction: PredictionResult | null = null;
        let hasUserIdField = false;

        for (const [propKey, propValue] of Object.entries(schema?.properties || {}) as [string, any]) {
            const isRequired = schema?.required?.includes(propKey) || false;
            metadata.resolvedFields[propKey] = {
                originalValue: undefined,
                resolvedValue: undefined,
                isRequired,
                propKey,
                propType: propValue.type,
                description: propValue.description,
            };

            if (propKey === 'userId' && this.aiResolver) {
                hasUserIdField = true;
                const aiResult = await this.aiResolver.resolveUserIdContext(
                    normalizedAction,
                    { description: propValue.description },
                    actionInfo.path,
                    actionInfo.method
                );
                userIdPrediction = aiResult; // Lưu lại kết quả dự đoán
                processedBody[propKey] = aiResult.suggestedVariableName;
                metadata.resolvedFields[propKey] = {
                    ...metadata.resolvedFields[propKey],
                    originalValue: 'userId',
                    resolvedValue: processedBody[propKey],
                    aiResult: aiResult
                };
            } else if (isRequired) {
                processedBody[propKey] = this.getDefaultValueForProperty(propKey, propValue);
                metadata.resolvedFields[propKey].resolvedValue = processedBody[propKey];
            } else {
                processedBody[propKey] = CONST[`${propKey}`];
                metadata.resolvedFields[propKey].resolvedValue = CONST[`${propKey}`];
            }
        }

        const headerKey = 'x-session-token';
        let headerValue = VAR.token;

        if (hasUserIdField && userIdPrediction) {
            headerValue = userIdPrediction.userIdMeaning === 'receiver'
                ? VAR.token
                : VAR.token1;
        }

        processedBody.headers = {
            ...processedBody.headers,
            [headerKey]: headerValue
        };

        metadata.resolvedFields.headers = {
            originalValue: 'auto-generated',
            resolvedValue: { [headerKey]: headerValue },
            reasoning: hasUserIdField
                ? `Header tự động thêm dựa trên userId là ${userIdPrediction?.userIdMeaning || 'unknown'}`
                : 'Header mặc định (sender) vì không có trường userId trong body',
            aiResult: userIdPrediction
        };

        processedBody.metadata = metadata;
        // console.log(JSON.stringify(processedBody, null, 2))
        return processedBody;
    }
    private getDefaultValueForProperty(propKey: string, propSchema: any): any {
        if (!CONST[propKey]) {
            console.warn(`PropKey not found`);
        }
        return CONST[propKey];
    }
}

export function createAIEnhancedDTO(): AIEnhancedDTOBuilder {
    return new AIEnhancedDTOBuilder();
}
