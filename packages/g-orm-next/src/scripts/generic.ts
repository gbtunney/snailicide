import {isNil} from "ramda"
import {isNotNil, isArray} from "ramda-adjunct"
import {FixedLengthArray} from 'type-fest';
import {isDefined} from '@vueuse/core'

///TODO: i hate these names, should be moved to library
export const isUndefined = <T = unknown, Rtn = undefined>(data: NonNullable<any> | Nullish): data is undefined => isNil(data)
export const isNotUndefined = <T = unknown>(data: T | Nullish): data is T => isNotNil<T>(data)

export type Nullish = null | undefined

///TODO: WIP !! typeguardsss
export const isIdentity = <T = unknown>(data: T, key: keyof T, value: T[keyof T] | Nullish): data is T => {
    /* if (isNotUndefined<T>(data) && isNotUndefined(key)) {
         if (isNotUndefined<T[keyof T]>(data[key] ?? undefined)) {
             if (isNotUndefined(value)
                 && isNotUndefined<T[keyof T]>(data[key] ?? undefined)
                 && isNotUndefined<T[keyof T]>( value as any )) return (data[key] == value)
         }
     }*/
    return true
}
//todo: other WI{
type FirstArrayElement<T = unknown> = T extends FixedLengthArray<T, 1> ? T[0] : never
const getArrayElement = <T = unknown>(data: unknown | unknown[]): data is FirstArrayElement<T> =>
    (isNotUndefined(data) && isArray(data) && data.length > 0)
export const isRefDefined = isDefined
