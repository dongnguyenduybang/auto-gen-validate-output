export enum ReportCategory {
    REPORT_CATEGORY_UNSPECIFIED = 0,//	the user report for reasonable unspecified
    REPORT_CATEGORY_HARASSMENT = 1,//the user report for reasonable harassment
    REPORT_CATEGORY_SUICIDE_OR_SELF_INJURY = 2,//	the user report for reasonable suicide or self injury
    REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE = 3,//The user must choose who is being pretended from PretendingToEnum
    REPORT_CATEGORY_SHARING_INAPPROPRIATE_CONTENT = 4,//	the user report for reasonable sharing inappropriate content
    REPORT_CATEGORY_HATE_SPEECH = 5,//	the user report for reasonable hate speech
    REPORT_CATEGORY_UNAUTHORIZED_SALES = 6,//	the user report for reasonable unauthorized sales
    REPORT_CATEGORY_SCAMS = 7,//	the user report for reasonable scams
    REPORT_CATEGORY_SPAM = 8,//the user report for reasonable spam
    REPORT_CATEGORY_COPYRIGHT = 9,///	the user report for reasonable copyright
    REPORT_CATEGORY_OTHER = 20,//the user report for reasonable others reasons
}