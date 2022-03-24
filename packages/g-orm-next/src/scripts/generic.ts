import {isNil} from "ramda"
import {isNotNil} from "ramda-adjunct"

export const isUndefined = <T = unknown, Rtn = undefined>(data: T | Nullish): data is undefined => isNil(data)
export const isNotUndefined = <T = unknown>(data: T | Nullish): data is T => isNotNil<T>(data)

export type Nullish = null | undefined
