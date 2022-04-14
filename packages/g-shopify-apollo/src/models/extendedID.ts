import {parseGid} from "@shopify/admin-graphql-api-utilities";
import {TypePolicies, TypePolicy, FieldReadFunction, ReadFieldOptions} from "@apollo/client/cache";
import {FieldFunctionOptions, FieldPolicy} from "@apollo/client/cache/inmemory/policies";
import type {StringKeyOf, Integer} from 'type-fest';
import {getDigitCount, isInteger, toInteger} from "@snailicide/g-library"
import {Extended_Id, Product} from "@/types/generated/storefront-types";
import type {CustomTypePolicy, CustomFieldPolicy} from "./../types"

const gid = (value: string): string => {
    return atob(value)
}
const sid = (value: string): number | undefined => {
    const idStr = parseGid(gid(value))
    if (isInteger(idStr)) {
        return (getDigitCount(toInteger(idStr) as number) > 10) ? toInteger(idStr) as number : undefined
    }
}

const policyExample: CustomTypePolicy<Product> = {
    keyFields: ["id"],
    fields: {
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
