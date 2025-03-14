import { AttachmentTypeEnum } from '../../enums/attachment-type.enum';

export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    // return error
    if (errors.length > 0) {
      return errors;
    }

    return [];
  } catch (error) {
    console.error('Error in validateAfterLogic:', error.message);
    return [error.message];
  }
}
