import { resolveVariables } from "../../helps/get-resolve-variables";

export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    console.log(await resolveVariables("{{contentBefore}}"),await resolveVariables("{{userId}}") )
    const responseData = data[0]?.data?.message;

    if (!responseData?.originalMessage || responseData.originalMessage.length === 0) {
      errors.push("Field 'originalMessage' mismatch or is empty");
    } else {

      if (responseData?.originalMessage.content !== await resolveVariables("{{contentBefore}}")) {
        errors.push(`originalMessage.content mismatch payload`);
      }
      if (responseData?.originalMessage.userId !== await resolveVariables("{{userId}}")) {
        errors.push(`originalMessage.userId mismatch payload`);
      }
      // if (originalMessage.messageId !== payload.reportReason) {
      //   errors.push(`reports[${index}].reportReason mismatch payload`);
      // }
    }

    if (errors.length > 0) {
      return errors;
    }
    return [];
  } catch (error) {
    console.error("Error in validateAfterLogic:", error.message);
    return [error.message];
  }
}