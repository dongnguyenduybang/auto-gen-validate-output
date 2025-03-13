export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {

    const responseData = data[0]?.data?.message;

    if (!responseData?.reactions || Object.keys(responseData.reactions).length === 0) {
      errors.push(`field reactions must not be undefined or empty`);
    } else {

      const { emoji } = payload;

      if (!responseData.reactions[emoji]) {
        errors.push(`Emoji '${emoji}' must not be undefined or empty in response`);
      } else {
        const reactionData = responseData.reactions[emoji];

        if (reactionData.total !== 1) {
          errors.push(`Total '${emoji}' invalid`);
        }
        if (reactionData.isReacted !== true) {
          errors.push(`isReacted '${emoji}' invalid`);
        }
      }
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