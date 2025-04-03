import axios from "axios";

export async function measureRequest(payload: any, pathRequest: string, resolvedHeader: any, performance: any) {
    const startTime = process.hrtime();
    try {
        const response = await axios.post(
            `${globalThis.url}${pathRequest}`,
            payload,
            {
                headers: { ...resolvedHeader },
                validateStatus: () => true,
                timeout: performance.requestTimeout
            }
        );

        const [seconds, nanoseconds] = process.hrtime(startTime);
        const responseTime = seconds * 1000 + nanoseconds / 1e6;

        return {
            success: true,
            data: response.data,
            statusCode: response.status,
            responseTime,
            responseSize: JSON.stringify(response.data).length
        };
    } catch (error) {
        const [seconds, nanoseconds] = process.hrtime(startTime);
        return {
            success: false,
            error: error.message,
            responseTime: seconds * 1000 + nanoseconds / 1e6
        };
    }
};