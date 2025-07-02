import * as tf from '@tensorflow/tfjs';

export interface TrainingData {
    action: string;
    apiEndpoint: string;
    swaggerDesc: string;
    contextClues: string[];
    userIdMeaning: 'sender' | 'receiver' | 'target';
    httpMethod: string;
    schemaId?: string;
    fieldName?: string;
}
export interface PredictionResult {
    userIdMeaning: string;
    confidence: number;
    probabilities?: Record<string, number>;
    reasoning: string;
    method?: string;
    suggestedVariableName?: string;
    aiInsight?: PredictionResult; // Add this line
}

export class AIUserIdResolver {
    private model: tf.LayersModel | null = null;
    private vocabulary: Map<string, number> = new Map();
    private isModelLoaded: boolean = false;
    protected _trainingData: TrainingData[] = [];

    constructor() {
        this._trainingData  = [
            {
                action: "ACCEPT_MESSAGE_REQUEST",
                apiEndpoint: "/api/v3/messages/accept",
                swaggerDesc: "Accept friend request from user",
                contextClues: ["accept", "from", "request", "sender"],
                userIdMeaning: "sender",
                httpMethod: "POST"
            },
            {
                action: "SEND_DM_MESSAGE",
                apiEndpoint: "/api/v3/messages/send",
                swaggerDesc: "Send direct message to user",
                contextClues: ["send", "to", "message", "recipient"],
                userIdMeaning: "receiver",
                httpMethod: "POST"
            },
            {
                action: "BLOCK_USER",
                apiEndpoint: "/api/v3/users/block",
                swaggerDesc: "Block target user",
                contextClues: ["block", "target", "user"],
                userIdMeaning: "receiver",
                httpMethod: "POST"
            },
        ];
    }

    async initializeAI(): Promise<void> {
        console.log('Initializing AI model...');
        this.buildVocabulary();
        await this.createAndTrainModel();
        this.isModelLoaded = true;
        console.log('AI model ready!');
    }

    private buildVocabulary(): void {
        const allWords = new Set<string>();

        this._trainingData .forEach(data => {
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

        console.log(`Vocabulary size: ${this.vocabulary.size}`);
    }

    private textToVector(text: string, maxLength: number = 20): number[] {
        const words = text.toLowerCase().split(/[\s_]+/);
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

        const actionVector = this.textToVector(actionName, 10);
        const descVector = this.textToVector(swaggerDesc, 15);

        features.push(...actionVector, ...descVector);

        const methodEncoding: Record<string, number[]> = {
            'GET': [1, 0, 0, 0],
            'POST': [0, 1, 0, 0],
            'PUT': [0, 0, 1, 0],
            'DELETE': [0, 0, 0, 1]
        };
        features.push(...(methodEncoding[method] || [0, 0, 0, 0]));

        const endpointFeatures = [
            endpoint.includes('accept') ? 1 : 0,
            endpoint.includes('send') ? 1 : 0,
            endpoint.includes('block') ? 1 : 0,
            endpoint.includes('follow') ? 1 : 0,
        ];
        features.push(...endpointFeatures);

        return features;
    }

    private async createAndTrainModel(): Promise<void> {
        const trainX: number[][] = [];
        const trainY: number[] = [];

        const labelMap: Record<string, number> = { 'sender': 0, 'receiver': 1, 'target': 2 };

        this._trainingData .forEach(data => {
            const features = this.createFeatureVector(
                data.action,
                data.swaggerDesc,
                data.apiEndpoint,
                data.httpMethod
            );

            trainX.push(features);
            trainY.push(labelMap[data.userIdMeaning]);
        });

        const xs = tf.tensor2d(trainX);
        const ys = tf.tensor1d(trainY, 'int32');
        const ysCategorical = tf.oneHot(ys, 3);

        this.model = tf.sequential({
            layers: [
                tf.layers.dense({
                    inputShape: [trainX[0].length],
                    units: 64,
                    activation: 'relu',
                    kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
                }),
                tf.layers.dropout({ rate: 0.3 }),
                tf.layers.dense({
                    units: 32,
                    activation: 'relu',
                    kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
                }),
                tf.layers.dropout({ rate: 0.2 }),
                tf.layers.dense({
                    units: 3,
                    activation: 'softmax'
                })
            ]
        });

        this.model.compile({
            optimizer: tf.train.adam(0.001),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        console.log('Training AI model...');
        await this.model.fit(xs, ysCategorical, {
            epochs: 100,
            batchSize: 2,
            validationSplit: 0.2,
            verbose: 1,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    if (epoch % 20 === 0 && logs) {
                        console.log(`Epoch ${epoch}: loss = ${logs.loss.toFixed(4)}, accuracy = ${logs.acc.toFixed(4)}`);
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
            throw new Error('AI model not loaded. Call initializeAI() first.');
        }

        const features = this.createFeatureVector(actionName, swaggerDesc, endpoint, method);
        const inputTensor = tf.tensor2d([features]);

        const prediction = this.model.predict(inputTensor) as tf.Tensor;
        const probabilities = await prediction.data();

        const labels = ['sender', 'receiver', 'target'];
        const maxIndex = probabilities.indexOf(Math.max(...probabilities));
        const confidence = probabilities[maxIndex];

        inputTensor.dispose();
        prediction.dispose();

        return {
            userIdMeaning: labels[maxIndex],
            confidence: confidence,
            probabilities: {
                sender: probabilities[0],
                receiver: probabilities[1],
                target: probabilities[2]
            },
            reasoning: `AI predicted ${labels[maxIndex]} with ${(confidence * 100).toFixed(1)}% confidence`
        };
    }

    async learnFromFeedback(
        actionName: string,
        swaggerDesc: string,
        endpoint: string,
        method: string,
        correctAnswer: 'sender' | 'receiver' | 'target'
    ): Promise<void> {
        const features = this.createFeatureVector(actionName, swaggerDesc, endpoint, method);

        this._trainingData .push({
            action: actionName,
            swaggerDesc: swaggerDesc,
            apiEndpoint: endpoint,
            httpMethod: method,
            userIdMeaning: correctAnswer,
            contextClues: this.extractContextClues(swaggerDesc)
        });

        console.log(`Learned: ${actionName} -> userId means ${correctAnswer}`);

        if (this._trainingData .length % 5 === 0) {
            console.log('Retraining model with new data...');
            await this.createAndTrainModel();
        }
    }

    private extractContextClues(text: string): string[] {
        const keywords = ['accept', 'send', 'receive', 'from', 'to', 'block', 'follow', 'target', 'user'];
        return keywords.filter(keyword => text.toLowerCase().includes(keyword));
    }

    async resolveUserIdContext(
        actionName: string,
        swaggerSchema: any = {},
        endpoint: string = '',
        method: string = 'POST'
    ): Promise<PredictionResult> {
        try {
            const aiResult = await this.predictUserIdMeaning(
                actionName,
                swaggerSchema.description || '',
                endpoint,
                method
            );

            if (aiResult.confidence < 0.7) {
                console.log('AI confidence low, falling back to rules...');
                const ruleResult = this.fallbackToRules(actionName, swaggerSchema);

                return {
                    userIdMeaning: ruleResult.userIdMeaning,
                    confidence: Math.max(aiResult.confidence, ruleResult.confidence),
                    reasoning: `${ruleResult.reasoning}\nAI Insight: ${aiResult.reasoning}`,
                    method: 'hybrid',
                    aiInsight: aiResult,
                    suggestedVariableName: this.generateVariableName(ruleResult.userIdMeaning)
                };
            }

            return {
                ...aiResult,
                method: 'ai',
                suggestedVariableName: this.generateVariableName(aiResult.userIdMeaning)
            };

        } catch (error) {
            console.error('AI prediction failed:', error);
            return this.fallbackToRules(actionName, swaggerSchema);
        }
    }

    private fallbackToRules(actionName: string, swaggerSchema: any): PredictionResult {
        const desc = (swaggerSchema.description || '').toLowerCase();
        const action = actionName.toLowerCase();

        if (action.includes('accept') || desc.includes('accept') || desc.includes('from')) {
            return {
                userIdMeaning: 'sender',
                confidence: 0.8,
                method: 'rules',
                reasoning: 'Rule-based: Accept actions typically refer to sender'
            };
        }

        if (action.includes('send') || desc.includes('send') || desc.includes('to')) {
            return {
                userIdMeaning: 'receiver',
                confidence: 0.8,
                method: 'rules',
                reasoning: 'Rule-based: Send actions typically refer to receiver'
            };
        }

        return {
            userIdMeaning: 'unknown',
            confidence: 0.3,
            method: 'rules',
            reasoning: 'No clear pattern detected'
        };
    }

    protected  generateVariableName(userIdMeaning: string): string {
        return userIdMeaning === 'receiver' ? 'userId1' : 'userId';
    }
}