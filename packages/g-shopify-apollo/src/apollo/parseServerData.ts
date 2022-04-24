import {ApolloLink} from "@apollo/client/core";
import * as RA from "ramda-adjunct";
import {ProductOption, ProductOption as TProductOption, ProductOptionValue} from "./../types";
import {slugify} from "@snailicide/g-library";

//TODO: This is a MESS.
// it has no types and is NOT how i  wanted to do this
// use Apollo instead of populating all these fields for VuexOrm
// assign the types.

const getProductOptionValuesExpanded = (option: ProductOption, product_id: string) => {
    const {id: option_id, values = []} = option
    const __typename: "ProductOptionValue" = "ProductOptionValue" as const
    return values.map((value, index: number): Partial<ProductOptionValue> => {
        return {
            __typename,
            handle: slugify(value),
            title: value,
            parent_handle: (option.title) ? slugify(option.title) : "no handle",
            option_id,
            product_id,
            //  option,
            position: index++,
            //variants: []
        }
        //console.log("busted ID!!!!!!!!!!", testing)
        // return testing
    })
}

export const parseDataLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
        if (operation.operationName === 'productByHandleCustom') {
            if (data?.data?.product) {

                const {id: product_id} = data.data.product
                /* * Parse Options!! * */
                if (data.data.product.options) {
                    /* * Assign alterered values to DATA * */
                    data.data.product.options = data.data.product.options.map((_option: TProductOption, index: number) => {
                        return {
                            ..._option,
                            position: index++,
                            option_values: getProductOptionValuesExpanded(_option, product_id)
                        }
                    })
                }

                /* * Parse Variants Edges!! * */
                if (data.data.product.variants.edges) {
                    const Node = data.data.product.variants.edges.map((_variant: any, index: number) => {

                        const variant_id = (_variant?.node?.id) ? _variant.node.id : "44444444444"
                        /* * Parse Selected Options / VariantOption * */
                        const SelectedOptions = RA.ensureArray(_variant?.node?.selectedOptions).map((_selected_option) => {
                            return {
                                parent_handle: slugify(_selected_option?.parent_handle),
                                option_value_handle: slugify(_selected_option?.handle),
                                // __typename: 'VariantOption',
                                variant_id,
                                product_id,
                            }
                            //      console.log("testdatax",variant_id,_variant?.node?.id,testdata)
                            // return testdata
                        })

                        return {..._variant?.node, position: index++, SelectedOptions, product_id}
                        // console.log("ttttt",ttttt)
                        // return ttttt
                    })
                    /* * Assign alterered values to DATA * */
                    data.data.product.Variants = Node
                    //    console.log("node",Node)
                }

                /* * Parse Product Image!! * */
                if (data.data.product.images.edges) {
                    /* * Assign alterered values to DATA * */
                    data.data.product.Images = data.data.product.images.edges.map((_image: any, index: number) => {
                        return {..._image?.node, position: index++, product_id}
                    })
                }
            }
        }
        console.log("data", data)

        return data;
    })
});
export default parseDataLink
