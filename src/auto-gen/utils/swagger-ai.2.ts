import { AIUserIdResolver, TrainingData, type PredictionResult } from "./swagger-ai.3";
import schemas from '../swagger/schemas.json';



interface EnhancedPredictionResult extends PredictionResult {
    description?: string;
    suggestedVar?: string;
    schemaId?: string;
    fieldName?: string;
}

// Enhanced AI training data based on actual schemas
export class EnhancedAIResolver extends AIUserIdResolver {
    constructor() {
        super();
        const parentTrainingData = (this as any)._trainingData || [];
        // Initialize with parent's training data
        this._trainingData = [
            ...parentTrainingData, // Access parent's private property carefully
            {
                action: "ACCEPT_MESSAGE_REQUEST",
                apiEndpoint: "/api/v3/messages/accept",
                swaggerDesc: "The user identify to accept friend request",
                contextClues: ["accept", "friend", "request", "identify"],
                userIdMeaning: "sender",
                httpMethod: "POST",
                schemaId: "V3AcceptMessageRequestRequest"
            },
            {
                action: "SEND_DM_MESSAGE", 
                apiEndpoint: "/api/v3/messages/send",
                swaggerDesc: "Send direct message to user",
                contextClues: ["send", "message", "to", "direct"],
                userIdMeaning: "receiver",
                httpMethod: "POST"
            },
            {
                action: "CREATE_CHANNEL",
                apiEndpoint: "/api/v3/channels/create",
                swaggerDesc: "The list of user IDs invited to join a group",
                contextClues: ["invite", "join", "group", "list"],
                userIdMeaning: "target",
                httpMethod: "POST",
                schemaId: "V3CreateChannelRequest",
                fieldName: "userIds"
            }
        ];
    }

    async analyzeSchema(schemaId: string, fieldName = 'userId'): Promise<EnhancedPredictionResult | null> {
        const schema = (schemas as any)[schemaId];
        if (!schema) {
            throw new Error(`Schema ${schemaId} not found`);
        }

        const field = schema.properties[fieldName];
        if (!field) {
            console.warn(`Field ${fieldName} not found in schema ${schemaId}`);
            return null;
        }

        // Find matching training data
        const trainingMatch = this._trainingData.find(data => 
            data.schemaId === schemaId && 
            (data.fieldName === fieldName || !data.fieldName)
        );

        if (trainingMatch) {
            return {
                userIdMeaning: trainingMatch.userIdMeaning,
                confidence: 0.95,
                method: 'schema_match',
                reasoning: `Direct schema match: ${schemaId}.${fieldName}`,
                description: field.description,
                suggestedVar: this.generateVariableName(trainingMatch.userIdMeaning),
                schemaId,
                fieldName
            };
        }

        // Fallback to AI prediction
        const result = await this.predictUserIdMeaning(
            schemaId.replace(/Request$/, ''),
            field.description || '',
            '', 
            'POST'
        );

        return {
            ...result,
            description: field.description,
            suggestedVar: this.generateVariableName(result.userIdMeaning),
            schemaId,
            fieldName
        };
    }
}

// Test function
export async function testAIWithRealSchemas() {
    console.log('=== Testing AI with Real Schemas ===\n');
    
    const aiResolver = new EnhancedAIResolver();
    await aiResolver.initializeAI();

    // Test case 1: ACCEPT_MESSAGE_REQUEST
    console.log('🧪 Test 1: ACCEPT_MESSAGE_REQUEST');
    const result1 = await aiResolver.analyzeSchema('V3AcceptMessageRequestRequest', 'userId');
    if (result1) {
        console.log('Result:', result1);
        console.log('Suggested usage:', `${result1.suggestedVar} // ${result1.reasoning}\n`);
    }

    // Test case 2: CREATE_CHANNEL with userIds
    console.log('🧪 Test 2: CREATE_CHANNEL with userIds');
    const result2 = await aiResolver.analyzeSchema('V3CreateChannelRequest', 'userIds');
    if (result2) {
        console.log('Result:', result2);
        console.log('Suggested usage:', `${result2.suggestedVar} // ${result2.reasoning}\n`);
    }

    // Test case 3: Generic prediction for DELETE_CHANNEL
    console.log('🧪 Test 3: Generic prediction for DELETE_CHANNEL');
    const result3 = await aiResolver.resolveUserIdContext(
        'DELETE_CHANNEL',
        {
            description: 'The channel identify',
            properties: { channelId: { type: 'string' } }
        },
        '/api/v3/channels/delete',
        'DELETE'
    );
    console.log('Result:', result3);
    console.log('Suggested usage:', `VAR.${result3.userIdMeaning}ChannelId // ${result3.reasoning}\n`);

    return { aiResolver, results: [result1, result2, result3] };
}

// Generate enhanced body function 
async function generateEnhancedBody(actionName: string, schemaId: string) {
    const aiResolver = new EnhancedAIResolver();
    await aiResolver.initializeAI();
    
    const schema = (schemas as any)[schemaId];
    const enhancedBody: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(schema.properties)) {
        if (schema.required?.includes(key)) {
            if (key === 'userId' || key === 'userIds') {
                const analysis = await aiResolver.analyzeSchema(schemaId, key);
                if (analysis) {
                    enhancedBody[key] = analysis.suggestedVar;
                    console.log(`🤖 ${key} -> ${analysis.suggestedVar} (${analysis.userIdMeaning})`);
                } else {
                    enhancedBody[key] = `VAR.${key}`;
                }
            } else {
                enhancedBody[key] = `VAR.${key}`;
            }
        }
    }
    
    return enhancedBody;
}

// Demo usage
export async function demoUsage() {
    console.log('=== Demo: AI-Enhanced Body Generation ===\n');
    
    const acceptBody = await generateEnhancedBody('ACCEPT_MESSAGE_REQUEST', 'V3AcceptMessageRequestRequest');
    console.log('AcceptMessageRequest body:', acceptBody);
    
    const createChannelBody = await generateEnhancedBody('CREATE_CHANNEL', 'V3CreateChannelRequest');
    console.log('CreateChannel body:', createChannelBody);
    
    console.log('\n=== Comparison ===');
    console.log('Old way: { userId: "VAR.userId" }');
    console.log('AI way:  { userId: "VAR.fromUserId" } // AI detected: sender context');
}