export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data[0]?.data?.message;
    console.log(responseData)
    // check mediaAttachments undefined or empty
    if (!responseData?.mediaAttachments || responseData.mediaAttachments.length === 0) {
      errors.push("Field 'mediaAttachments' is missing or empty in response.");
    }

    //check attachmentType có value là 7 
    if (responseData.attachmentType !== 7) {
      errors.push("Field 'attachmentType' must be equal value: 7");
    }

    // check typeof
    if (responseData?.mediaAttachments && Array.isArray(responseData.mediaAttachments)) {

      responseData.mediaAttachments.forEach((attachment, index) => {
        if (!attachment?.sticker) {
          errors.push(`Sticker missing in mediaAttachments at index ${index}`);
        }

        if (!attachment.sticker?.collectionId) {
          errors.push(`collectionId missing in sticker`);
        }

        if (!attachment.sticker?.stickerId) {
          errors.push(`stickerId missing in sticker`);
        } else {
          if (attachment.sticker?.stickerId !== payload.stickerId) {
            errors.push(`stickerId must equal with payload.stickerId`);
          }
        }

      });
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
