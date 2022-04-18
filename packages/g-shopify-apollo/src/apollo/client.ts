import {ApolloClient, from, gql} from "@apollo/client/core";
import {iStorefrontApiConfig} from "./../types";
import {useCache, createApolloHttpLink, useApolloLogging} from ".";
import {DirectiveLink} from "apollo-link-directive";
import {ApolloLink, Operation, NextLink} from '@apollo/client/core';

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



const logTimeLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
        // data from a previous link
     ///   const time = new Date() - operation.getContext().start;

        if ( operation.operationName === 'productByHandleCustom' ){
                if ( data?.data?.product.variants.edges ){
                  const variants =   data.data.product.variants.edges.forEach((variantedge:any)=>{
                      if ( variantedge && variantedge?.node){
                          const image = variantedge.node.image
                            const newimageObj = {...image,variants: [{ __typename : "ProductVariant", id: variantedge.node.id }] }

                          variantedge.node.image =  newimageObj
                      }
                        //  const image = {. {variants: [{ __typename : "ProductVariant", id: variantedge.node.id }]
                              // return  {variantedge , {node:}}    variantedge?.node?.image.variants = [" i am a variant "]
                              ///debugger;
                      //}

                     // return variantedge

                  })
                }
            operation.setContext({"gilliantest":"hello!"});
            console.log(`gillian data ${operation.operationName} tookto complete`,operation,data,operation.getContext());

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
