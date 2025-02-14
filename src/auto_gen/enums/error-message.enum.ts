export enum ErrorMessage {
    NULL = 'should not be null',
    EMPTY = 'should not be empty',
    UNDEFINED = 'should not be undefined',
    MIN_LENGTH = 'must be longer than or equal to',
    MAX_LENGTH = 'must be less than or equal to',
    MIN = 'must not be less than',
    MAX = 'must not be greater than',
    MIN_ARRAY = 'must contain at least',
    MAX_ARRAY = 'must contain at most',
    INVALID_TYPE_NUMBER = 'must be a number conforming to the specified constraints',
    INVALID_TYPE_STRING = 'must be a string',
    INVALID_TYPE_BOOLEAN = 'must be a boolean',
    INVALID_TYPE_ARRAY = 'must be an array',
    INVALID_TYPE_DATE = 'must be a date',
    INVALID_TYPE_OBJ = 'must be an object',
    INVALID_ENUM = 'should not be invalid enum',
    INVALID_DATE_OVER_CURRENT = 'must not dates greater than or equal to the current date'

}