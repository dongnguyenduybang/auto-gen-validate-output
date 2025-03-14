import { AttachmentTypeEnum } from "../../enums/attachment-type.enum";

export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data[0]?.data?.message;

    if(!responseData && responseData.length === 0){
      errors.push(`missing data message or empty in response`);
    }else {
      if(responseData?.content !== payload.content){
        errors.push(`Field content must be equal payload content with value ${payload.content}`);
      }
      if(responseData?.attachmentType !== AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_UNSPECIFIED){
        if(!responseData?.embed && responseData.embed.length === 0){
          errors.push(`Field embed must not be undefined or empty when attachmentType !== ${ AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_UNSPECIFIED} `);
        }
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
