import { resolveVariables } from "../../helps/get-resolve-variables";

export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data[0]?.data?.message;
    console.log(responseData)

    if (Object.keys(responseData?.reactions || {}).length !== 0) {
      errors.push("Field 'reactions' is empty or undefined");
     }else {
      const reactionData = responseData.reactions[payload.emoji];
      if(reactionData){
        errors.push("Field 'reactions' with emoji ${payload.emoji} must be undefined");
      }
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
