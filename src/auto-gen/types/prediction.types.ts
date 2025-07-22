export interface TrainingData {
    action: string;
    apiEndpoint: string;
    swaggerDesc: string;
    contextClues: string[];
    httpMethod?: string;
    schemaId?: string;
    fieldName?: string;
    userIdMeaning?: 'sender' | 'receiver';
}

export interface PredictionResult {
    userIdMeaning: string;
    confidence: number;
    probabilities?: Record<string, number>;
    reasoning: string;
    method?: string;
    suggestedVariableName?: string;
}

export interface RecentSelection {
  action: string;
  type: string;
  paths: string[];
  timestamp: number;
}