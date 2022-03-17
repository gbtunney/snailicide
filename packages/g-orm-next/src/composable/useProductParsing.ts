import {ApolloLink} from '@apollo/client/core';
import {
    ProductFragment as TProductFragment,
    Product as TProduct,
    ProductVariantFragment as TProductVariantFragment,
    ProductVariantConnection as TProductVariantConnection,
    ImageFragment as TImageFragment,
    ImageConnection as TImageConnection,
    ProductOptionFragment as TProductOptionFragment,
    ProductOptionValueFragment as TProductOptionValueFragment, ProductByHandleQuery,
} from "./../graphql/types/generated-types";
// @ts-expect-error NOT TYPESCRIPT ! maybe switch to the admin one?
import {encode, decode} from 'shopify-gid'

import {slugify} from "@snailicide/g-library";

export const useProductParsing = () => {
    return new ApolloLink((operation, forward) => {
        return forward(operation).map((response) => {
            const {data} = response
            //  if ( operation.operationName ==='productByHandle' &&  (data as ProductByHandleQuery).productByHandle ){
            const product = ((data as ProductByHandleQuery).productByHandle as TProductFragment)
            let {gid} = product
            gid = atob(gid)
            // return {...product,gid}
            const dataobj = {
                productByHandle: {
                    ...product,
                    gid: "i am test",
                    description: "i am gillian !!!!!"
                }
            }
            console.log(`useProductParsing: parsing a product!!!:`, gid, dataobj);
            response.data = dataobj//{productByHandle:{...product,gid:"i am gillian !!!!!"}}
            return response
            //   }
            // return
        });
    });
}

export const parseDataProductFragment = (data: TProduct) => {
    console.log("decoding!!!!!!!!!", gid)
    const {
        images = [],
        variants = [],
        options = [],
    } = data
    return {
        ...data,
        options: parseDataProductOptions(options),
        images: parseDataProductImages(images),
        variants: parseDataVariants(variants)
    }
}

interface Fragment {
    position: number
}

type TFragment<T> = T & Fragment
export const parseDataProductImages = (data): TFragment<TImageFragment>[] => {
    return data.edges.map((image_edge, index: number): TFragment<TImageFragment> => {
        const {node: _image}: { node: unknown } = image_edge
        const image: TImageFragment = (_image as TImageFragment)
        return {...image, position: index + 1}
    })
}

export const parseDataVariants = (data: TProductVariantConnection): TFragment<TProductVariantFragment>[] => {
    return data.edges.map((variant_edge, index: number): TFragment<TProductVariantFragment> => {
        const {node: _variant}: { node: unknown } = variant_edge
        const variant: TProductVariantFragment = (_variant as TProductVariantFragment)
        return {...variant, position: index + 1}
    })
}

interface IProductOption extends Omit<TFragment<TProductOptionFragment>, "values"> {
    values: TFragment<TProductOptionValueFragment>[]
}

export const parseDataProductOptions = (data: Array<TProductOptionFragment>) => {
    return data.map((option, index: number): IProductOption => {
        const handle = slugify(option.title)
        const test = option.values
        const parent_option: TFragment<TProductOptionFragment> = {...option, handle, position: index + 1}
        return {...parent_option, values: parseDataProductOptionValues(option.values, parent_option)}
    })
}

export const parseDataProductOptionValues = (data: Array<string>, parent_option: TProductOptionFragment) => {
    return data.map((value_string, index: number): TFragment<TProductOptionValueFragment> => {
        return {
            type: "SelectedOption",
            title: value_string,
            parentHandle: parent_option.handle,
            handle: slugify(value_string),
            position: index + 1
        }
    })
}
