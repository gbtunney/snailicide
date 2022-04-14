import {StringKeyOf} from "type-fest";
import {FieldReadFunction, ReadFieldOptions, TypePolicy} from "@apollo/client/cache";
import {FieldFunctionOptions, FieldPolicy} from "@apollo/client/cache/inmemory/policies";
import {Reference, StoreObject} from "@apollo/client/core";

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


type DeepReference<X> = X extends Record<string, any>
    ? X extends { id: string }
        ? Reference
        : {
            [K in keyof X]: DeepReference<X[K]>;
        }
    : X extends Array<{ id: string }>
        ? Array<Reference>
        : X;

export interface ReadFieldFunction {
    <T, K extends keyof T = keyof T>(
        context: FieldFunctionOptions,
        options: ReadFieldOptions
    ): DeepReference<T[K]>;

    <T, K extends keyof T = keyof T>(
        context: FieldFunctionOptions,
        fieldName: K,
        from?: Reference | StoreObject | undefined
    ): DeepReference<T[K]>;
}

export const readField: ReadFieldFunction = (...args: any) => {
    const [context, ...restArgs] = args;
    return context.readField(...restArgs);
};
