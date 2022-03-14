import * as RA from "ramda-adjunct";

/**
 * Validate String TODO:update tihs.
 * @param {*} value - string to test
 * @param {array} [d=[]]] test_values - test string array
 * @param { startsWith | includes | endsWith | eq | contains} - operation
 * @example
 *      validateString("kitten", ["kit", "hi"], "startsWith"))
 *      => true
 */
type validateOperation = 'startsWith' | 'endsWith' | 'includes' | 'contains' | 'eq' | validateFunc
type validateFunc = (value: string, pattern: string) => boolean

interface IValidateObj {
    value: string,
    pattern: string | RegExp,
    validate_op?: validateOperation
}

/* * Validate functions.  * */
export const startsWith: validateFunc = (value, pattern) => value.startsWith(pattern)
export const endsWith: validateFunc = (value, pattern) => value.endsWith(pattern)
export const includes: validateFunc = (value, pattern) => value.includes(pattern)
export const eq: validateFunc = (value, pattern) => (value === pattern)
export const contains: validateFunc = includes
export const match = (value: string, pattern: RegExp): boolean => pattern.test(value)

export const validateString = (value: string,
                               pattern: string | RegExp,
                               validate_op: validateOperation = "eq"): boolean => {

    if (RA.isRegExp(pattern)) return match(value, pattern as RegExp)
    return (validate_op as validateFunc)(value, pattern as string)
}

export const validateStringBatch = (value: string | IValidateObj[],
                                    validateObjects?: Omit<IValidateObj, 'value'>[],
                                    operation: "some" | "every" = "some"): boolean => {
    let validateArr: IValidateObj[] = []
    if (RA.isString(value) && RA.isNotUndefined(validateObjects)) {
        validateArr = (validateObjects as Omit<IValidateObj, 'value'>[]).map((obj) => {
            return {...obj, value}
        })
    } else validateArr = value as IValidateObj[]
    const _operation = (operation === "some") ? validateArr.some : validateArr.every
    return _operation((obj) => validateString(obj.value, obj.pattern, obj.validate_op))
}
