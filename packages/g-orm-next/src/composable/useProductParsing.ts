import {ApolloLink} from '@apollo/client/core';
import {Merge} from 'type-fest';
import * as RA from "ramda-adjunct"
import {slugify, get} from "@snailicide/g-library";
import {
    ProductByHandleQuery,
    ProductFragment as TProductFragment,
    Product as TProduct,
    ProductVariantFragment as TProductVariantFragment,
    ProductVariantEdge as TProductVariantEdge,
    ProductVariant as TProductVariant,
    ImageFragment as TImageFragment,
    ImageEdge as TImageEdge,
    Image as TImage,
} from "./../graphql/types/generated-types";

import {
    TProductFragment as TProductFragmentNew2,
    TProductImageFragment as TProductImageFragmentNew2,
    TProductVariantFragment as TProductVariantFragmentNew,
    TProductOptionFragment as TProductOptionFragmentNew,
    TProductOptionValueFragment as TProductOptionValueFragmentNew
} from './../models/'

type TProductImageFragmentNew = Merge<TProductImageFragmentNew2, TImageFragment>
//type TProductVariantFragmentNew = Merge<TProductVariantFragmentNew2, TProductVariantFragment>
type TProductFragmentNew = Merge<TProductFragment, TProductFragmentNew2>

//TODO: all of these variants are a MESS. PLS FIX THIS!!!! TProductVariantFragmentNew2 is a dumb name
interface Fragment {
    position: number
}

type TFragment<T> = T & Fragment

type EdgeType = "ProductVariantEdge" | "ImageEdge" | "ProductEdge"

interface IEdge {
    __typename: EdgeType
}

type TEdge<T> = T & IEdge

type NodeType = "ProductVariant" | "Product" | "Image"

interface INode {
    __typename?: NodeType
}

type TNode<T> = T & INode

type TProductFromQ = ProductByHandleQuery["productByHandle"]
const isImageEdge = (data: TImageEdge): data is TImageEdge => (data as TImageEdge).__typename !== "ImageEdge";
const isVariantEdge = (data: TProductVariantEdge): data is TProductVariantEdge => (data as TProductVariantEdge).__typename !== "ProductVariantEdge";

const isEdge = <T>(data: T, typename: EdgeType): data is TEdge<T> => {
    if (RA.isUndefined(data) || RA.isUndefined((data as TEdge<T>).__typename)) return false
    return (data as TEdge<T>).__typename === typename;
}
const isNode = <T, T2 = 'TProductFromQ'>(data: T | T2, typename: NodeType): data is TNode<T> => {
    if (RA.isUndefined(data) || RA.isUndefined((data as TNode<T>).__typename)) return false
    return (data as TNode<T>).__typename === typename;
}

export const parseDataProductImages = (data: Array<any>): TProductImageFragmentNew2[] => {
    return data.map((image_edge, index: number): TProductImageFragmentNew2 => {
        if (isEdge<TImageEdge>(image_edge, "ImageEdge")
            && isNode<TImage>(image_edge.node, "Image")) {
            const image: TProductImageFragmentNew = ((image_edge.node as unknown) as TProductImageFragmentNew)
            return {...image, type: "Image", position: index + 1}
        }
        return image_edge
    })
}

export const parseDataVariants = (data: Array<any>): TProductVariantFragmentNew[] => {
    return data.map((variant_edge, index: number): TProductVariantFragmentNew => {
        if (isEdge<TProductVariantEdge>(variant_edge, 'ProductVariantEdge')
            && isNode<TProductVariant>(variant_edge.node, "ProductVariant")) {
            let image_id = {}
            if (RA.isNotUndefined(get(variant_edge, "node", "image"))) {
                const image = get(variant_edge, "node", "image") as NonNullable<TImage>
                if (isNode<TImage>(image, "Image")) image_id = {image_id: image.id}
            }
            const variant: TProductVariantFragmentNew = ((variant_edge.node as unknown) as TProductVariantFragmentNew)
            return {...variant, ...image_id, position: index + 1}
        }
        return variant_edge
    })
}

export const parseDataProductOptions = (data: Array<TProductOptionFragmentNew> | undefined): TProductOptionFragmentNew[] => {
    if (RA.isUndefined(data)) data = []
    return data.map((option, index: number): TProductOptionFragmentNew => {
        const handle = slugify(option.title)
        const parent_option: TProductOptionFragmentNew = {...option, handle, position: index + 1}
        return {...parent_option, values: parseDataProductOptionValues(option.values, parent_option)}
    })
}

export const parseDataProductOptionValues = (data: Array<unknown>, parent_option: TProductOptionFragmentNew) => {
    return data.map((value_string, index: number): TProductOptionValueFragmentNew => {
        const _value_string: string = (value_string as string).toString()
        return {
            type: "ProductOptionValue",
            title: _value_string,
            parent_handle: parent_option.handle,
            handle: slugify(_value_string),
            position: index + 1,
            option_id: parent_option.id
        }
    })
}

export const parseDataProductFragment = (data: TProductFromQ): TProductFragmentNew | undefined => {
    if (isNode<TProduct, TProductFromQ>(data, "Product")) {
        const _data: TProductFragmentNew = (data as unknown) as TProductFragmentNew
        const teee: TProductOptionFragmentNew[] = (get(data, 'options') as unknown) as TProductOptionFragmentNew[]
        return {
            ..._data,
            images: parseDataProductImages(data.images.edges),
            variants: parseDataVariants(data.variants.edges),
            options: parseDataProductOptions(teee)
        }
    }
}

export const useProductParsing = () => {
    return {
        parseDataProductFragment: parseDataProductFragment,
        getApolloLink: new ApolloLink((operation, forward) => {
            return forward(operation).map((response) => {
                const {data} = response
                if (operation.operationName === 'productByHandle' && (data as ProductByHandleQuery).productByHandle) {
                    const product = (data as ProductByHandleQuery).productByHandle
                    const dataobj = parseDataProductFragment(product)
                    console.log(`useProductParsing: doneparsing a product!!!:`, dataobj);
                    response.data = {productByHandle: dataobj}
                }
                return response
            });
        })
    }
}
export default useProductParsing
