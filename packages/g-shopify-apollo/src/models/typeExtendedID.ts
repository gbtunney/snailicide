import {parseGid} from "@shopify/admin-graphql-api-utilities";
import {getDigitCount, isInteger, toInteger} from "@snailicide/g-library"
import {Extended_Id} from "@/types/generated/storefront-types";
import type {CustomTypePolicy} from "./../types"

const gid = (value: string): string => {
    return atob(value)
}
const sid = (value: string): number | undefined => {
    const idStr = parseGid(gid(value))
    if (isInteger(idStr)) {
        return (getDigitCount(toInteger(idStr) as number) > 10) ? toInteger(idStr) as number : undefined
    }
}
export const policyExtended_ID: CustomTypePolicy<Extended_Id> = {
    fields: {
        cacheID(read, options){
            const id: string | undefined = options.readField("id")
            const __typename: string | undefined = options.readField("__typename")
            return (id !== undefined && __typename !== undefined ) ? `${__typename}:${id}` : undefined
        },
        gid(read, options) {
            const id: string | undefined = options.readField("id")
            return (id !== undefined) ? gid(id) : undefined
        },
        sid(read, options) {
            const id: string | undefined = options.readField("id")
            return (id) ? sid(id) : undefined
        },
    }
}
export default policyExtended_ID;
