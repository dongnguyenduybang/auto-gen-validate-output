import { ACTION, HEADER_LIST, VAR } from "../enums";
import { DTOBuilder } from "./chain-dto";
import { initializeAI, BODY_AI } from "./swagger-ai.1";
import { BODY } from "./swagger-body";


interface Step {
    name: string;
    actions: Action[];
}

interface Action {
    name: string;
    key: string;
    action: string;
    config: any;
}

interface DTOExecutionResult {
    steps: Step[];
    metadata: {
        generatedAt: string;
        aiEnhanced: boolean;
    };
}

class AIEnhancedDTOBuilder {
    private steps: Step[] = [];
    private currentStep: Step | null = null;
    private aiInitialized: boolean = false;

    async ensureAIInitialized(): Promise<void> {
        if (!this.aiInitialized) {
            await initializeAI();
            this.aiInitialized = true;
        }
    }

    startStep(stepName: string): this {
        this.currentStep = {
            name: stepName,
            actions: []
        };
        return this;
    }

    async addActionAI(name: string, key: string, action: string, config: any = {}): Promise<this> {
        await this.ensureAIInitialized();

        const endpoint = this.getEndpointFromAction(action);
        const method = config.method || 'POST';

        const enhancedBody = await BODY_AI.create(action, { endpoint, method });

        const enhancedConfig = {
            ...config,
            body: enhancedBody
        };

        if (!this.currentStep) {
            throw new Error("No current step. Call startStep() first.");
        }

        this.currentStep.actions.push({
            name,
            key,
            action,
            config: enhancedConfig
        });

        return this;
    }

    addAction(name: string, key: string, action: string, config: any): this {
        if (!this.currentStep) {
            throw new Error("No current step. Call startStep() first.");
        }

        this.currentStep.actions.push({
            name,
            key,
            action,
            config
        });
        return this;
    }

    addBeforeAll(name: string, key: string, action: string, config: any): this {
        return this.addAction(name, key, action, config);
    }

    private getEndpointFromAction(action: string): string {
        const endpointMappings: Record<string, string> = {
            'ACCEPT_MESSAGE_REQUEST': ACTION.ACCEPT_MESSAGE_REQUEST,
            'SEND_DM_MESSAGE': ACTION.SEND_DM_MESSAGE,
            'CREATE_CHANNEL': ACTION.CREATE_CHANNEL,
            'DELETE_CHANNEL': ACTION.DELETE_CHANNEL,
            'UPDATE_CHANNEL_AVATAR': '/api/v3/channels/avatar/update',
            'UPDATE_CHANNEL_NAME': '/api/v3/channels/name/update',
            'DELETE_CHANNEL_AVATAR': '/api/v3/channels/avatar/delete'
        };

        return endpointMappings[action] || '';
    }

    execute(): DTOExecutionResult {
        if (this.currentStep) {
            this.steps.push(this.currentStep);
            this.currentStep = null;
        }

        return {
            steps: this.steps,
            metadata: {
                generatedAt: new Date().toISOString(),
                aiEnhanced: this.aiInitialized
            }
        };
    }
}

export function createAIEnhancedDTO(): AIEnhancedDTOBuilder {
    return new AIEnhancedDTOBuilder();
}

// Usage examples
export async function createAcceptMessageRequestAI() {
    try {
        const builder = createAIEnhancedDTO()
            .startStep('accept message request');

        await builder.addActionAI('accept message request', 'accept-request', ACTION.ACCEPT_MESSAGE_REQUEST, {
            headers: HEADER_LIST.create({ token: VAR.token })
        });

        await builder.addActionAI('send dm message', 'send-message', ACTION.SEND_DM_MESSAGE, {
            headers: HEADER_LIST.create({ token: VAR.token1 })
        });

        return builder.execute();
    } catch (error) {
        console.error('Error building AI-enhanced DTO:', error);
        throw error;
    }
}
