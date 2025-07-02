    import { createBodyFromSwaggerJson } from './swagger-help';

    export const BODY = {
        create: (endpoint: string) => {
            const bodySwagger = createBodyFromSwaggerJson(endpoint)
            console.log(bodySwagger)
            return bodySwagger
        }
    };
