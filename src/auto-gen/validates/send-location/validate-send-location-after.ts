import { AttachmentTypeEnum } from "src/auto-gen/enums/attachment-type.enum";
import { EmbedTypeEnum } from "../../enums/embed-type.enum";
import { extractCoordinates } from "../../helps/utils";

export async function validateAfterLogic(data, payload) {
  const errors = [];
  try {
    const responseData = data[0]?.data?.message;

    if (!Array.isArray(responseData.embed) || responseData.embed.length === 0) {
      errors.push("Field 'embed' is missing or empty in response.");
    }

    const embed = responseData.embed[0];
    if (!embed.locationData) {
      errors.push("Field 'locationData' is missing in response.");
    } else {
      const { latitude: expectedLatitude, longitude: expectedLongitude } = payload;

      if (embed.locationData.latitude !== expectedLatitude) {

        errors.push(`Latitude mismatch: expected ${expectedLatitude}, received ${embed.locationData.latitude}`);
      }

      if (embed.locationData.longitude !== expectedLongitude) {

        errors.push(`Longitude mismatch: expected ${expectedLongitude}, received ${embed.locationData.longitude}`);
      }

      if(!embed.locationData.description){

        errors.push("Field 'locationData.description' is missing in response.");
      }else{

        const coordinatesFromDescription = extractCoordinates(embed.locationData.description);
        if(coordinatesFromDescription){
          const latitudeMatch = (parseFloat(embed.locationData.latitude) === coordinatesFromDescription.latitude);
          const longitudeMatch = (parseFloat(embed.locationData.longitude) === coordinatesFromDescription.longitude);

          if(!latitudeMatch && !longitudeMatch){
            errors.push("Field 'locationData.description' invalid latitude or longitude");
          }
        }
      }

      if(!embed.locationData.thumbnail_url){

        errors.push("Field 'locationData.thumbnail_url' is missing in response.");
      }
     
    
    }

    if (String(embed.type).trim() !== String(EmbedTypeEnum.EMBED_TYPE_ENUM_LOCATION).trim()) {
      errors.push(`Field 'embed.type' must be equal with value ${EmbedTypeEnum.EMBED_TYPE_ENUM_LOCATION}.`);
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