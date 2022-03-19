import {ApolloLink} from '@apollo/client/core';
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
    ProductOptionFragment as TProductOptionFragment,
    ProductOptionValueFragment as TProductOptionValueFragment,
} from "./../graphql/types/generated-types";
import * as RA from "ramda-adjunct"
import {slugify, get} from "@snailicide/g-library";

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

//remove the nested object in the 'edges'
interface IProductParsed extends Omit<TProductFragment, "images" | "variants" | "options"> {
    images: TFragment<TImageFragment>[],
    variants: TFragment<IProductVariant>[]
    options: TFragment<IProductOption>[]
}

const isEdge = <T>(data: T, typename: EdgeType): data is TEdge<T> => {
    if (RA.isUndefined(data) || RA.isUndefined((data as TEdge<T>).__typename)) return false
    return (data as TEdge<T>).__typename === typename;
}
const isNode = <T, T2 = 'TProductFromQ'>(data: T | T2, typename: NodeType): data is TNode<T> => {
    if (RA.isUndefined(data) || RA.isUndefined((data as TNode<T>).__typename)) return false
    return (data as TNode<T>).__typename === typename;
}

export const parseDataProductImages = (data: Array<any>): TFragment<TImageFragment>[] => {
    return data.map((image_edge, index: number): TFragment<TImageFragment> => {
        if (isEdge<TImageEdge>(image_edge, "ImageEdge")
            && isNode<TImage>(image_edge.node, "Image")) {
            const image: TImageFragment = ((image_edge.node as unknown) as TImageFragment)
            return {...image, position: index + 1}
        }
        return image_edge
    })
}

interface IProductVariant extends Omit<TProductVariantFragment, "image"> {
    image_id?: string
}

export const parseDataVariants = (data: Array<any>): TFragment<IProductVariant>[] => {
    return data.map((variant_edge, index: number): TFragment<IProductVariant> => {
        if (isEdge<TProductVariantEdge>(variant_edge, 'ProductVariantEdge')
            && isNode<TProductVariant>(variant_edge.node, "ProductVariant")) {
            let image_id = {}
            if (RA.isNotUndefined(get(variant_edge, "node", "image"))) {
                const image = get(variant_edge, "node", "image") as NonNullable<TImage>
                if (isNode<TImage>(image, "Image")) image_id = {image_id: image.id}
            }
            const variant: IProductVariant = ((variant_edge.node as unknown) as IProductVariant)
            return {...variant, ...image_id, position: index + 1}
        }
        return variant_edge
    })
}
import {Merge} from 'type-fest';

interface IProductOption extends Omit<TFragment<TProductOptionFragment>, "values"> {
    values: TFragment<TProductOptionValueFragment>[]
}

export const parseDataProductOptions = (data: Array<TProductOptionFragment> | undefined): TFragment<IProductOption>[] => {
    if (RA.isUndefined(data)) data = []
    return data.map((option, index: number): IProductOption => {
        const handle = slugify(option.title)
        const parent_option: TFragment<TProductOptionFragment> = {...option, handle, position: index + 1}
        return {...parent_option, values: parseDataProductOptionValues(option.values, parent_option)}
    })
}

export const parseDataProductOptionValues = (data: Array<string>, parent_option: TProductOptionFragment) => {
    return data.map((value_string, index: number): TFragment<TProductOptionValueFragment> => {
        return {
            type: "SelectedOption",
            title: value_string,
            parent_handle: parent_option.handle,
            handle: slugify(value_string),
            position: index + 1
        }
    })
}
export const parseDataProductFragment = (data: TProductFromQ): IProductParsed | undefined => {
    if (isNode<TProduct, TProductFromQ>(data, "Product")) {
        const _data: IProductParsed = (data as unknown) as IProductParsed
        return {
            ..._data,
            images: parseDataProductImages(data.images.edges),
            variants: parseDataVariants(data.variants.edges),
            options: parseDataProductOptions(get(data, 'options'))
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
