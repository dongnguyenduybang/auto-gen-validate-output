export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data;

    if (responseData.length !== payload) {
      errors.push(`quantity users in the response is ${responseData.length}, payload: ${payload}.`);
    }

    const userExists = responseData.some(user => user.username.startsWith(payload.prefix));
    if (!userExists) {
      errors.push(`No user found with username startsWith prefix: ${payload.prefix}`);
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
