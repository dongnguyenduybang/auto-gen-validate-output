export async function validateAfterLogic(data, payload) {
  const errors = [];
    try {
  
      const responseData = data[0]?.data?.message?.embed;

      if (!Array.isArray(responseData) || responseData.length === 0) {
        errors.push("Field 'embed' is missing or empty in response.");
      }
  
      const locationData = responseData[0]?.locationData;
      if (!locationData) {
        errors.push("Field 'locationData' is missing in response.");
      }
  
      const { latitude: expectedLatitude, longitude: expectedLongitude } = payload;
  

      if (locationData.latitude !== expectedLatitude) {
        errors.push(`Latitude mismatch: expected ${expectedLatitude}, received ${locationData.latitude}`);
      }
      if (locationData.longitude !== expectedLongitude) {
        errors.push(`Longitude mismatch: expected ${expectedLongitude}, received ${locationData.longitude}`);
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