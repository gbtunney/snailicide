/*
import { DocumentNode } from 'graphql';
import { TypedTypePolicies } from './../types/generated/apollo-helpers';
import {ApolloClient, from, gql} from "@apollo/client/core";
import { Product ,ProductVariant} from './../types/generated/storefront-types';
import {Get,Primitive, SetRequired, SetOptional} from "type-fest";

export type CustomFieldPolicies<Base> = {
    fields:CustomFieldPolicy<Base>
}
export type CustomFieldPolicy<Base> = NonNullable<// Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
    {
        // Map through all the keys of the given base type.
        [Key in keyof Base]:
        // Pick only keys with types extending the given `Condition` type.
        Record<Key, FieldPolicy<Base[Key]> | FieldReadFunction<Base[Key]>>  //  Base[Key] extends Condition
    }[keyof Base]>;

//import ClientSchema from './../graphql/client-schema.gql'
import {
    Reference,StoreObject,FieldFunctionOptions
} from '@apollo/client/core'
import {ReadFieldOptions} from "@apollo/client/cache/core/types/common";
import {FieldPolicy, FieldReadFunction} from "@apollo/client/cache";
interface TypePoliciesSchema {
    typeDefs?: DocumentNode;
    typePolicies: TypedTypePolicies;
}

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
//Get<Product,'handle'> :Get<Product, 'createdAt'>

//:Get<Product,"handle">
export const readField: ReadFieldFunction = <T,K>(data: NonNullable<T>,
                                                  key: keyof NonNullable<T> extends Primitive ? keyof NonNullable<T> : never,
                                                  value:  Primitive) => {
    //const [context, ...restArgs] = args;
 //   return context.readField(...restArgs);
};
const Product:CustomFieldPolicies<Product> = {
    fields:{
        handle:{
            handle({value,result},options){

            }
        }

    }
}
const typePolicies :TypedTypePolicies ={

    Query: {
        fields: {
            readManagers: {
                read(){

                }
               /!* read(employees, context) {
                    const employees = readField<Query, 'readEmployees'>(context, 'readEmployees');

                    return employees.filter(employeeRef => {
                        const employeeRole = readField<Employee, 'role'>(context, 'role', employeeRef);
                        return employeeRole === EmployeeRole.Manager;
                    });
                },*!/
            }
        }
    }
}
export type Query = {
    readManagers: Array<Product>
}
const schema: TypePoliciesSchema = {
    typeDefs:gql`
        extend type QueryRoot {
            readManagers: [Product!]!
        }
    `,
    typePolicies: {
        Query: {
            fields: {
              //  readManagers: {...},
              //  readManagerss: {...} // Typo reports a TSC error
            }
        }
    }
}

*/
