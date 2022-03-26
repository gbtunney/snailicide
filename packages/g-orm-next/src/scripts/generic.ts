import {isNil} from "ramda"
import {isNotNil, isArray} from "ramda-adjunct"
import {FixedLengthArray, Primitive} from 'type-fest';
import {isDefined} from '@vueuse/core'

///TODO: i hate these names, should be moved to library
export const isUndefined = <T = unknown, Rtn = undefined>(data: NonNullable<any> | Nullish): data is undefined => isNil(data)
export const isNotUndefined = <T = any>(data: T | Nullish): data is T => isNotNil<T>(data)

export type Nullish = null | undefined

export const narrowDefined = isUndefined

export const matchProp = <T = unknown>(data: NonNullable<T>,
                                       key: keyof NonNullable<T> extends Primitive ? keyof NonNullable<T> : never,
                                       value:  Primitive
): data is NonNullable<T> => {

    if (isNotUndefined<NonNullable<T>>(data) && isNotUndefined<Primitive>(key) && isNotUndefined(value)) {
        if (isNotUndefined(data[key])) return true
    }
    return false
}

///TODO: WIP !! typeguardsss
//todo: other WI{
type FirstArrayElement<T = unknown> = T extends FixedLengthArray<T, 1> ? T[0] : never
const getArrayElement = <T = unknown>(data: unknown | unknown[]): data is FirstArrayElement<T> =>
    (isNotUndefined(data) && isArray(data) && data.length > 0)
export const isRefDefined = isDefined
