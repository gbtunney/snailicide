import {ApolloClient, from, gql} from "@apollo/client/core";
import {iStorefrontApiConfig, ProductOption, ProductOptionValue} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {DirectiveLink} from "apollo-link-directive";
import {ApolloLink, Operation, NextLink} from '@apollo/client/core';
import {slugify} from "@snailicide/g-library";

const functionToUppercase = (value: string) => {
    return (value).toUpperCase()
}
const adminDirectiveLink: unknown = new DirectiveLink(
    [{
        directive: 'uppercase',
        callback: (operation: Operation, _forward: NextLink) => {
            console.log("uppercase directive called!!!!!!!!", operation)
            return operation.setContext({uppercase: functionToUppercase})
        }
    }]
);

const getProductOptionValuesExpanded = (option: ProductOption) => {
    const {id: option_id, values = []} = option
    return values.map((value): ProductOptionValue => {
        const dataObject: ProductOptionValue = {
            __typename: "ProductOptionValue",
            handle: slugify(value),
            title: value,
            option_id,
            option,
            variants: []
        }
        return dataObject
    })
}

const logTimeLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
        if (operation.operationName === 'productByHandleCustom') {
            if (data?.data?.product) {
                const {id: product_id} = data.data.product
                if (data.data.product.options) {
                    data.data.product.options = data.data.product.options.map((_option: ProductOption) => {
                        const newValueArr = getProductOptionValuesExpanded(_option)
                        return {..._option, option_values: newValueArr}
                    })
                }

                if (data.data.product.variants.edges) {
                    data.data.product.variants.edges = data.data.product.variants.edges.map((_variant: any, index: number) => {
                        let selected_option_values = []
                        if (_variant && _variant?.node) {
                            const variant = _variant.node
                            /* * Manipulate to make OptionValues for variant  * */
                            if (variant.product.id && variant.product.options) {
                                const options = variant.product.options

                                const optionvaluearray = variant.selectedOptions
                                selected_option_values = optionvaluearray.map((_selectedOption: any): ProductOptionValue | undefined => {
                                    const name = _selectedOption.name
                                    const found = variant.product.options.find((item: any) => {
                                        if (item && item.name && name) {
                                            if (name === item.name) {
                                                return item;
                                            }
                                        }
                                    })
                                    if (found) {
                                        // const variant:ProductVariant = { __typename : "ProductVariant", id: variantedge.node.id } as ProductVariant
                                        const dataObject: ProductOptionValue = {
                                            __typename: "ProductOptionValue",
                                            handle: slugify(_selectedOption.handle),
                                            title: _selectedOption.handle,
                                            option_id: found.id,
                                            option: found,
                                        }
                                        return dataObject
                                    }
                                    return {..._variant, node}
                                })
                            }
                        }

                        const node = {
                            ..._variant?.node,
                            selected_option_values,
                            position: index,
                            product_id,
                            image_id: _variant?.node.image?.id
                        }
                        return {..._variant, node}

                    })

                    data.data.product.Variants = data.data.product.variants.edges.map((_variant:any)=>{
                        return _variant?.node
                    })
                }
                if (data.data.product.images.edges) {
                    data.data.product.images.edges = data.data.product.images.edges.map((_image: any, index: number) => {
                        const node = {..._image?.node, position: index, product_id}
                        return {..._image, node}
                    })
                }
            }
            console.log("-----option  s!!!", data?.data?.product)

            /*   if (data?.data?.product.variants.edges) {
                   const testImagemap = new Map();
                   const variants = data.data.product.variants.edges.forEach((variantedge: any) => {
                       if (variantedge && variantedge?.node) {
                           const image = variantedge.node.image
                           const newimageObj = {
                               ...image,
                               variants: [{__typename: "ProductVariant", id: variantedge.node.id}]
                           }

                           if (testImagemap.get(image.id)) {
                               console.log("already set ... compiling... ? ")
                           } else {
                               testImagemap.set(image.id, {__typename: "ProductVariant", id: variantedge.node.id})
                               console.log("setting a value.. ? ")

                           }

                           variantedge.node.image = newimageObj
                       }
                       //  const image = {. {variants: [{ __typename : "ProductVariant", id: variantedge.node.id }]
                       // return  {variantedge , {node:}}    variantedge?.node?.image.variants = [" i am a variant "]
                       ///debugger;
                       //}

                       // return variantedge

                   })
               }*/
        }
        return data;
    })
});

const additiveLink = from([
    logTimeLink
]);
const typeDefs = gql`
    extend input VariantOptionFilter {
        index:Int!
    }
    query gillianTest($handle: String!, $index:Int!) {
        productByHandle(handle: $handle) {
            variantBySelectedOptions(selectedOptions:$selectedOptions){
                ...ProductVariantFragment
            }
        }
    }
`
//const typeDefs = TestmessageDocument
export const createApolloClient = (payload: iStorefrontApiConfig) => {
    return new ApolloClient({
        typeDefs,
        cache: payload.cache,
        link: from([
            adminDirectiveLink as ApolloLink,
            useApolloLogging(payload.logging, payload.logging),
            logTimeLink,
            createApolloHttpLink(payload)
        ])
    });
}
export default createApolloClient
