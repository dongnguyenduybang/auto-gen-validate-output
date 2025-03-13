export async function validateAfterLogic(data, payload) {
    const errors: string[] = [];
    try {
        const responseData = data[0]?.data?.message;
        console.log(responseData)

        // check mediaAttachments undefined or empty
        if (!responseData?.content || responseData.content.length === 0) {
            errors.push("Field 'content' is missing or empty in response.");
        }
        if(responseData?.content !== payload.content){
            errors.push(`Field 'content' must be equal with payload ${payload.content}`);
        }

        // return error
        if (errors.length > 0) {
            return errors;
        }

        return [];
    } catch (error) {
        console.error("Error in validateAfterLogic:", error.message);
        return [error.message];
    }
}
