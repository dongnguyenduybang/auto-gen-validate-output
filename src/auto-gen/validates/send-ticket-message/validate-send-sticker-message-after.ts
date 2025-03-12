export async function validateAfterLogic(data, payload) {
   const errors: string[] = [];
    try {
  
      // const responseData = data[0]?.data?.message

    
      // if(!responseData){
      //   errors.push("Field 'message' is missing or empty in response.");
      // }

      // if(payload.channelId !== responseData.channelId){
      //   errors.push("Field 'channelId' must be to equal with payload");
      // }

      // if(payload.content !== responseData.content){
      //   errors.push("Field 'content' must be to equal with payload");
      // }

      if (errors.length > 0) {
        return errors;
      }
  
      return [];
    } catch (error) {

      console.error("Error in validateAfterLogic:", error.message);
      return [error.message];
    }
  }