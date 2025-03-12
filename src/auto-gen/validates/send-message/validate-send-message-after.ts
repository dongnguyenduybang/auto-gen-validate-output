export async function validateAfterLogic(data, payload) {
   const errors: string[] = [];
    try {
  
      const responseData = data[0]?.data  
      

    
      if (errors.length > 0) {
        return errors;
      }
  
      return [];
    } catch (error) {

      console.error("Error in validateAfterLogic:", error.message);
      return [error.message];
    }
  }