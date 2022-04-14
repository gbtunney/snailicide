import {
    InMemoryCache,
    gql,
    makeVar,
} from '@apollo/client/core'
import {FieldPolicy, FieldReadFunction, TypePolicies} from '@apollo/client/cache';

import {slugify} from "@snailicide/g-library";

import {typePolicyMerged} from "./../models/typeProduct";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));

const typePolicies: TypePolicies = {
    ...typePolicyMerged,
    ProductOption: {
        fields: {
            testing(read, options) {
                const values2: readonly string[] | undefined = options.readField("values")
                const handle = options.readField("handle")
                if (options?.variables?.product_id && values2) {
                    const newvar = values2.map((_item) => {
                        return {
                            parent_handle: handle,
                            option_id: options.readField("id"),
                            handle: _item,
                            product_id: options?.variables?.product_id
                        }
                    })
                    return newvar
                }
                return read
            },
            /*values:{
                read(value:ProductOption["values"], options) {
                    debugger;
                  const testing =   value.map((_value)=>{
                      return{
                            handle:slugify(_value),
                            title: _value,
                            //id: `ProductOptionValue:${options.readField("id")},${slugify(_value)}`,
                            option:{
                                id:options.readField("id"),
                                name:options.readField('name'),
                                __typename:"ProductOption"
                            }
                        }
                    })
                 const newstuff =  testing.map((item)=>{
                     const query5 =options.cache.writeFragment({
                         id: `ProductOptionValue:${options.readField("id")},${slugify(item.handle)}`,
                         fragment: gql`
                             fragment ProductOptionValueRealFragment on ProductOptionValue
                             {
                                 handle
                                 option{
                                     id
                                     name
                                 }
                                 title
                             }
                         `,
                         data:item,
                     });
                     return makeVar(query5)
                    })
                    console.log("testing gggg",newstuff)
                    return newstuff
                },
            }*/
        }
    },
}
export const useCache = (): InMemoryCache => {
    return new InMemoryCache({typePolicies: typePolicies})
}
export default useCache
