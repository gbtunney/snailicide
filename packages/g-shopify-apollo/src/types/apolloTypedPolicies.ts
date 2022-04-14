import {StringKeyOf} from "type-fest";
import {FieldReadFunction, TypePolicy} from "@apollo/client/cache";
import {FieldPolicy} from "@apollo/client/cache/inmemory/policies";

type KeysForType<BaseType> = StringKeyOf<BaseType>[]

//*** APOLLO TYPE POLICYS - CUSTOM **//
export type CustomTypePolicy<BaseType> = Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeysForType<BaseType> | (() => undefined | KeysForType<BaseType>),
    fields?: CustomFieldPolicy<BaseType>,
}

//*** APOLLO FIELD POLICYS - CUSTOM **//
export type CustomFieldPolicy<Base> = NonNullable<// Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
    {
        [fieldkey in keyof Base]:
        Record<fieldkey,
            FieldReadFunction<undefined | Base[fieldkey],
                Base[fieldkey]> |
            FieldPolicy<undefined | Base[fieldkey],   /*read type - will be undefined if its a local schema @client typer*/
                Base[fieldkey]>  /* returns the propertys type from the schema */>
    }[keyof Base]>;
