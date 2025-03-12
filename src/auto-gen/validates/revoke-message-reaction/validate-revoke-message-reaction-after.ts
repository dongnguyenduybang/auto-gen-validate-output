export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data[0]?.data?.message;

    if (Object.keys(responseData?.reactions || {}).length === 0) {
        errors.push("Field 'reactions' must be empty");
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
