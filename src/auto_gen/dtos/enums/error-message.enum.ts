export enum ErrorMessage {
    null = 'should not be null',
    empty = 'should not be empty',
    undefined = 'should not be undefined',
    minLength = 'must be longer than or equal to',
    maxLength = 'must be less than or equal to',
    min = 'must not be less than ',
    max = 'must not be greater than ',
    minArray = 'must contain at least',
    maxArray = 'must contain at most',
    invalidTypeNum = 'must be a number conforming to the specified constraints ',
    invalidTypeString = 'must be a string',
    invalidTypeBoolean = 'must be a boolean',
    invalidTypeArray = 'must be an array',
    invalidTypeDate = 'must be a date',
    invalidTypeObj = 'must be an object',
    invalidEnum = 'should not be invalid enum'
}
