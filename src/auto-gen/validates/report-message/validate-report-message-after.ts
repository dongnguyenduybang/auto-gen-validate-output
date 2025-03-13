export async function validateAfterLogic(data, payload) {
  const errors: string[] = [];
  try {
    const responseData = data[0]?.data?.message;

    if (!responseData?.reports || responseData.reports.length === 0) {
      errors.push("Field 'reports' mismatch or is empty");
    } else {

      for (const [index, report] of responseData.reports.entries()) {

        if (report.pretendingTo !== payload.pretendingTo) {
          errors.push(`reports[${index}].pretendingTo mismatch payload`);
        }
        if (report.reportCategory !== payload.reportCategory) {
          errors.push(`reports[${index}].reportCategory mismatch payload`);
        }
        if (report.reportReason !== payload.reportReason) {
          errors.push(`reports[${index}].reportReason mismatch payload`);
        }
      }
    }

    if(responseData?.isReported !== true){
      errors.push(`isReported must be true`);
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