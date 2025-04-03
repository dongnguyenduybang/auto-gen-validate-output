import { STATUS_CONFIG } from "../test-responses/test-response.interface"

export function generateResponse(headerResponse: any, bodyResponse: any, options: any) {
    if (!options.statusResponseException) {
        return
    }

    return options.exceptionStatusCodes?.map((statusCode: number) => {
        const statusConfig = STATUS_CONFIG[statusCode] || {
            name: `Status ${statusCode}`,
            customFields: {}
        };
        // Merge headers
        const headers = statusConfig.headerOverrides 
        ? {
            ...headerResponse,
            ...statusConfig.headerOverrides
          }
        : headerResponse;

    const body = statusConfig.bodyOverrides
        ? {
            ...bodyResponse,
            ...statusConfig.bodyOverrides
          }
        : bodyResponse;

    return {
        header: headers,
        body: body,
        expects: {
            statusResponse: statusCode,
            statusName: statusConfig.name,
            ...statusConfig.customFields
        }
    };
    }) || []

}