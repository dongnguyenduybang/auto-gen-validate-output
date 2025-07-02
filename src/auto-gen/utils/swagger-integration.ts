// // Cải thiện AIUserIdResolver với logic prediction tốt hơn
// class AIUserIdResolver {
//     private model: tf.LayersModel | null = null;
//     private vocabulary: Map<string, number> = new Map();
//     private isModelLoaded: boolean = false;
//     protected _trainingData: TrainingData[] = [];

//     constructor() {
//         // TRAINING DATA được cải thiện với context mạnh hơn
//         this._trainingData = [
//             {
//                 action: "ACCEPT_MESSAGE_REQUEST",
//                 apiEndpoint: ACTION.ACCEPT_MESSAGE_REQUEST,
//                 swaggerDesc: "Accept friend request from another user - userId is the person who sent the request",
//                 contextClues: ["accept", "from", "request", "sender", "friend", "who_sent"],
//                 userIdMeaning: "sender",
//                 httpMethod: "POST",
//                 schemaId: "V3AcceptMessageRequestRequest"
//             },
//             {
//                 action: "SEND_DM_MESSAGE", 
//                 apiEndpoint: ACTION.SEND_DM_MESSAGE,
//                 swaggerDesc: "Send direct message to another user - userId identifies the recipient who will receive the message",
//                 contextClues: ["send", "to", "message", "recipient", "receive", "whom", "destination", "target_user"],
//                 userIdMeaning: "receiver",
//                 httpMethod: "POST",
//                 schemaId: "V3SendDMMessageRequest"
//             },
//             {
//                 action: "ADD_DM_MESSAGE_REACTION",
//                 apiEndpoint: ACTION.ADD_DM_MESSAGE_REACTION, 
//                 swaggerDesc: "Add reaction to a direct message - userId is who will see the reaction",
//                 contextClues: ["reaction", "add", "message", "direct", "react", "to_user"],
//                 userIdMeaning: "receiver", // ⚠️ Cần xem lại logic này
//                 httpMethod: "POST",
//                 schemaId: "V3AddDmMessageReactionRequest",
//                 fieldName: "userId"
//             },
//             {
//                 action: "BLOCK_USER",
//                 apiEndpoint: "BLOCK_USER",
//                 swaggerDesc: "Block a specific user - userId is the target user to be blocked",
//                 contextClues: ["block", "target", "blocked", "user", "specific"],
//                 userIdMeaning: "target",
//                 httpMethod: "POST",
//                 schemaId: "V3BlockUserRequest"
//             },
//             {
//                 action: "UNBLOCK_USER", 
//                 apiEndpoint: "UNBLOCK_USER",
//                 swaggerDesc: "Unblock a specific user - userId is the target user to be unblocked",
//                 contextClues: ["unblock", "target", "unblocked", "user", "specific"],
//                 userIdMeaning: "target",
//                 httpMethod: "POST",
//                 schemaId: "V3UnblockUserRequest"
//             },
//             // Thêm data để tăng độ chính xác
//             {
//                 action: "GET_USER_PROFILE",
//                 apiEndpoint: "GET_USER_PROFILE",
//                 swaggerDesc: "Get profile of another user - userId is the target user whose profile to fetch",
//                 contextClues: ["get", "profile", "another", "user", "target", "whose", "fetch"],
//                 userIdMeaning: "target",
//                 httpMethod: "GET",
//                 schemaId: "V3GetUserProfileRequest"
//             },
//             {
//                 action: "FOLLOW_USER",
//                 apiEndpoint: "FOLLOW_USER", 
//                 swaggerDesc: "Follow another user - userId is the user to follow",
//                 contextClues: ["follow", "another", "user", "to_follow", "target"],
//                 userIdMeaning: "target",
//                 httpMethod: "POST",
//                 schemaId: "V3FollowUserRequest"
//             }
//         ];
//     }

//     // Cải thiện feature extraction để phân biệt rõ hơn
//     createFeatureVector(
//         actionName: string,
//         swaggerDesc: string = '',
//         endpoint: string = '',
//         method: string = 'POST'
//     ): number[] {
//         const features: number[] = [];
        
//         // Vector hóa action name (12 chiều)
//         const actionVector = this.textToVector(actionName, 12);
//         features.push(...actionVector);
        
//         // Vector hóa swagger description (20 chiều) - tăng để capture nhiều context hơn
//         const descVector = this.textToVector(swaggerDesc, 20);
//         features.push(...descVector);
        
//         // HTTP method encoding (4 chiều)
//         const methodEncoding: Record<string, number[]> = {
//             'GET': [1, 0, 0, 0],
//             'POST': [0, 1, 0, 0], 
//             'PUT': [0, 0, 1, 0],
//             'DELETE': [0, 0, 0, 1]
//         };
//         features.push(...(methodEncoding[method] || [0, 0, 0, 0]));
        
//         // Endpoint pattern features (8 chiều) - cải thiện
//         const endpointFeatures = [
//             endpoint.includes('accept') ? 1 : 0,
//             endpoint.includes('send') ? 1 : 0,
//             endpoint.includes('block') ? 1 : 0,
//             endpoint.includes('reaction') ? 1 : 0,
//             endpoint.includes('message') ? 1 : 0,
//             endpoint.includes('request') ? 1 : 0,
//             endpoint.includes('follow') ? 1 : 0,
//             endpoint.includes('profile') ? 1 : 0,
//         ];
//         features.push(...endpointFeatures);
        
//         // Semantic features (10 chiều) - QUAN TRỌNG để phân biệt sender/receiver
//         const fullText = `${actionName} ${swaggerDesc} ${endpoint}`.toLowerCase();
//         const semanticFeatures = [
//             // Receiver indicators
//             /send.*to|message.*to|recipient|receive|destination/.test(fullText) ? 1 : 0,
//             /whom.*receive|who.*will.*receive/.test(fullText) ? 1 : 0,
            
//             // Sender indicators  
//             /accept.*from|request.*from|from.*user/.test(fullText) ? 1 : 0,
//             /who.*sent|sender/.test(fullText) ? 1 : 0,
            
//             // Target indicators
//             /block.*user|unblock.*user|target.*user/.test(fullText) ? 1 : 0,
//             /specific.*user|another.*user/.test(fullText) ? 1 : 0,
            
//             // Action type indicators
//             /^send|^message/.test(actionName.toLowerCase()) ? 1 : 0,
//             /^accept|^approve/.test(actionName.toLowerCase()) ? 1 : 0,
//             /^block|^unblock|^follow/.test(actionName.toLowerCase()) ? 1 : 0,
//             /^get|^fetch/.test(actionName.toLowerCase()) ? 1 : 0,
//         ];
//         features.push(...semanticFeatures);
        
//         return features;
//     }

//     // Cải thiện model architecture
//     private async createAndTrainModel(): Promise<void> {
//         const trainX: number[][] = [];
//         const trainY: number[] = [];
//         const labelMap: Record<string, number> = { 
//             'sender': 0, 
//             'receiver': 1, 
//             'target': 2 
//         };

//         // Generate training data
//         this._trainingData.forEach(data => {
//             const features = this.createFeatureVector(
//                 data.action,
//                 data.swaggerDesc,
//                 data.apiEndpoint,
//                 data.httpMethod
//             );
//             trainX.push(features);
//             trainY.push(labelMap[data.userIdMeaning]);
//         });

//         console.log(`🏋️ Training with ${trainX.length} samples, ${trainX[0].length} features each`);
//         console.log(`📊 Label distribution:`, 
//             this._trainingData.reduce((acc, d) => {
//                 acc[d.userIdMeaning] = (acc[d.userIdMeaning] || 0) + 1;
//                 return acc;
//             }, {} as Record<string, number>)
//         );

//         const xs = tf.tensor2d(trainX);
//         const ys = tf.tensor1d(trainY, 'int32');
//         const ysCategorical = tf.oneHot(ys, 3);

//         // Improved model architecture
//         this.model = tf.sequential({
//             layers: [
//                 tf.layers.dense({
//                     inputShape: [trainX[0].length],
//                     units: 256,
//                     activation: 'relu',
//                     kernelRegularizer: tf.regularizers.l2({ l2: 0.001 })
//                 }),
//                 tf.layers.batchNormalization(),
//                 tf.layers.dropout({ rate: 0.3 }),
                
//                 tf.layers.dense({
//                     units: 128,
//                     activation: 'relu',
//                     kernelRegularizer: tf.regularizers.l2({ l2: 0.001 })
//                 }),
//                 tf.layers.batchNormalization(),
//                 tf.layers.dropout({ rate: 0.2 }),
                
//                 tf.layers.dense({
//                     units: 64,
//                     activation: 'relu'
//                 }),
//                 tf.layers.dropout({ rate: 0.1 }),
                
//                 tf.layers.dense({
//                     units: 3,
//                     activation: 'softmax'
//                 })
//             ]
//         });

//         this.model.compile({
//             optimizer: tf.train.adam(0.0005), // Lower learning rate
//             loss: 'categoricalCrossentropy',
//             metrics: ['accuracy']
//         });

//         // Training với early stopping simulation
//         const history = await this.model.fit(xs, ysCategorical, {
//             epochs: 300,
//             batchSize: Math.max(2, Math.floor(trainX.length / 3)),
//             validationSplit: 0.3,
//             verbose: 0,
//             shuffle: true
//         });

//         // Log training results
//         const finalLoss = history.history.loss[history.history.loss.length - 1];
//         const finalAccuracy = history.history.acc[history.history.acc.length - 1];
//         console.log(`📈 Training completed - Final accuracy: ${(finalAccuracy * 100).toFixed(1)}%, Loss: ${finalLoss.toFixed(4)}`);

//         // Test predictions on training data to verify
//         await this.validateModel(trainX, this._trainingData);

//         // Cleanup tensors
//         xs.dispose();
//         ys.dispose();
//         ysCategorical.dispose();
//     }

//     // Thêm method validation
//     private async validateModel(trainX: number[][], trainingData: TrainingData[]): Promise<void> {
//         console.log('🔍 Validating model predictions...');
        
//         for (let i = 0; i < trainingData.length; i++) {
//             const data = trainingData[i];
//             const features = trainX[i];
            
//             const inputTensor = tf.tensor2d([features]);
//             const prediction = this.model!.predict(inputTensor) as tf.Tensor;
//             const probabilities = await prediction.data();
            
//             const labels = ['sender', 'receiver', 'target'];
//             const maxIndex = probabilities.indexOf(Math.max(...probabilities));
//             const predictedLabel = labels[maxIndex];
//             const confidence = probabilities[maxIndex];
            
//             const isCorrect = predictedLabel === data.userIdMeaning;
//             const status = isCorrect ? '✅' : '❌';
            
//             console.log(`${status} ${data.action}: Expected "${data.userIdMeaning}", Predicted "${predictedLabel}" (${(confidence * 100).toFixed(1)}%)`);
            
//             inputTensor.dispose();
//             prediction.dispose();
//         }
//     }

//     // Cải thiện fallback rules
//     private fallbackToRules(actionName: string, swaggerSchema: any): PredictionResult {
//         const desc = (swaggerSchema.description || '').toLowerCase();
//         const action = actionName.toLowerCase();
//         const fullText = `${action} ${desc}`;
        
//         console.log(`🔧 Rule-based analysis for: "${fullText}"`);
        
//         // Precise patterns with higher specificity
//         const patterns = {
//             receiver: [
//                 /send.*to|message.*to/i,
//                 /recipient|whom.*receive/i,
//                 /destination|target.*receive/i,
//                 /identifies.*recipient/i,
//                 /user.*receive/i
//             ],
//             sender: [
//                 /accept.*from|request.*from/i,
//                 /who.*sent|sender.*request/i,
//                 /person.*who.*sent/i,
//                 /user.*sent.*request/i
//             ],
//             target: [
//                 /block.*user|unblock.*user/i,
//                 /target.*user|specific.*user/i,
//                 /another.*user.*profile/i,
//                 /user.*to.*follow/i
//             ]
//         };

//         // Check patterns with scoring
//         for (const [meaning, patternList] of Object.entries(patterns)) {
//             for (const pattern of patternList) {
//                 if (pattern.test(fullText)) {
//                     console.log(`🎯 Rule matched: "${pattern.source}" -> ${meaning}`);
//                     return {
//                         userIdMeaning: meaning,
//                         confidence: 0.9,
//                         method: 'rules',
//                         reasoning: `Rule-based: Pattern "${pattern.source}" matched`
//                     };
//                 }
//             }
//         }

//         // Fallback based on action name
//         if (/^send|^message/.test(action)) {
//             return {
//                 userIdMeaning: 'receiver',
//                 confidence: 0.7,
//                 method: 'rules', 
//                 reasoning: 'Action name suggests sending to someone (receiver)'
//             };
//         }
        
//         if (/^accept|^approve/.test(action)) {
//             return {
//                 userIdMeaning: 'sender',
//                 confidence: 0.7,
//                 method: 'rules',
//                 reasoning: 'Action name suggests accepting from someone (sender)'
//             };
//         }

//         return {
//             userIdMeaning: 'target',
//             confidence: 0.5,
//             method: 'rules',
//             reasoning: 'Default fallback: No clear pattern detected'
//         };
//     }
// }