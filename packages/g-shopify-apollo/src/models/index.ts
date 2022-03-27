import {ProductVariant} from "./ProductVariant";
import {Product} from "./Product";
import {ShallowReactive} from "@vue/reactivity";

export type ModelTypes = Product | ProductVariant

export type Model<T extends ModelTypes> = {
    create: ( value : T )=>ShallowReactive<T>
}

export {Product,ProductVariant}
