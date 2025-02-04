export enum ErrorMessage {
    null = 'is not null',
    empty = 'is not empty',
    undefined = 'is not missing',
    minLength = 'must be longer than or equal to',
    maxLength = 'must be less than or equal to',
    min = 'must not be less than ',
    max = 'must not be greater than ',
    invalidTypeNum = 'must be a number conforming to the specified constraints ',
    invalidTypeString = 'must be a string',
    invalidTypeBoolean = 'must be a boolean',
    invalidTypeArray = 'must be a array',
    invalidTypeDate = 'must be a date',
    minArray = 'must contain at least',
    maxArray = 'must contain at most'
}
