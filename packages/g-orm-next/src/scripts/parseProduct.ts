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
    TProductOptionValueFragment as TProductOptionValueFragmentNew,
    TVariantOption as TVariantOptionNew
} from './../models'

type TProductImageFragmentNew = Merge<TProductImageFragmentNew2, TImageFragment>
type TProductFragmentNew = Merge<TProductFragment, TProductFragmentNew2>

interface IVariantOption {
    option_value_id: string
}

interface IVariantParsed {
    selectedOptions: (IVariantOption | undefined)[]
}

type TVariantParsed = Merge<TProductVariantFragmentNew, IVariantParsed>

interface IProductParsed extends Omit<TProductFragmentNew, "variants"> {
    variants: TVariantParsed[]
}

type TProductReturnParsed = IProductParsed


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
    if (RA.isNotUndefined(data) && RA.isArray(data) && data.length > 0) {
        const firstItem = data[0]
        return (data as TNode<T>).__typename === typename;
    }
    if (RA.isUndefined(data) || RA.isUndefined((data as TNode<T>).__typename)) return false
    return (data as TNode<T>).__typename === typename;
}
const isTypedArray = <T>(data: T, typename: string): data is T => {
    if (RA.isNotUndefined(data) && RA.isArray(data) && data.length > 0) {
        const firstItem: typeof data[0] = data[0]
        if (RA.isUndefined((firstItem).type)) {
            return (typename in firstItem)
            //  return (firstItem as typeof data[0]).type === typename;
        }
    }
    return false
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
///todo: i dont know if tihs is actually reusabble but leaving it as is for now
const flattenArray = <T, T2>(arr: T[], prop: keyof T, innerKey: string): T2[] => {
    return arr.reduce((accumulator: T2[], item: T) => {
        if (RA.isArray(item[prop])) {
            const itemInnerArr: T2[] = (item[prop] as unknown) as T2[]
            return [...accumulator, ...itemInnerArr]
        } else return [...accumulator, ...[]]
    }, []);
}

const parseVariantSelectedOptions = (variant: TProductVariantFragmentNew, option_values: TProductOptionValueFragmentNew[]) => {
    return variant.selectedOptions?.map((selected_value): IVariantOption | undefined => {
        const slug_parent_handle = slugify(selected_value.parent_handle)
        const slug_handle = slugify(selected_value.handle)
        //find function
        const found_value = option_values.find(
            (item) => (slug_parent_handle == item.parent_handle && slug_handle == item.handle) ? true : false)
        if (found_value !== undefined) {
            const {position = 0} = found_value
            return {option_value_id: `[${found_value.option_id},${(position).toString()}]`}
        } else console.error("PARSE ERROR ERROR, no found value variant: ", variant, "selected_value:", selected_value, "option_values", option_values);
    })
}

export const parseDataVariants = (data: Array<any>, options: TProductOptionFragmentNew[]): TVariantParsed[] => {
    const optionvaluesflat = flattenArray<TProductOptionFragmentNew, TProductOptionValueFragmentNew>(options, "values", "type")
    return data.map((variant_edge, index: number): TVariantParsed => {
        if (isEdge<TProductVariantEdge>(variant_edge, 'ProductVariantEdge')
            && isNode<TProductVariant>(variant_edge.node, "ProductVariant")) {
            let image_id = {}
            if (RA.isNotUndefined(get(variant_edge, "node", "image"))) {
                const image = get(variant_edge, "node", "image") as NonNullable<TImage>
                if (isNode<TImage>(image, "Image")) image_id = {image_id: image.id}
            }
            const variant: TProductVariantFragmentNew = ((variant_edge.node as unknown) as TProductVariantFragmentNew)
            const variantParsed: TVariantParsed =
                {
                    ...((variant as unknown) as TVariantParsed),
                    selectedOptions: parseVariantSelectedOptions(variant, optionvaluesflat),
                    position: index + 1,
                   ... image_id
                }
            return variantParsed //{...variantParsed, ...image_id, position: index + 1}
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
            id: `[${parent_option.id},${(index + 1).toString()}]`,
            type: "ProductOptionValue",
            title: _value_string,
            parent_handle: slugify(parent_option.handle),
            option: parent_option,
            handle: slugify(_value_string),
            position: index + 1,
            option_id: parent_option.id,
        }
    })
}

export const parseDataProductFragment = (data: TProductFromQ): TProductReturnParsed|undefined  => {
    if (isNode<TProduct, TProductFromQ>(data, "Product")) {
        const _data: TProductFragmentNew = (data as unknown) as TProductFragmentNew
        //TODO: this is all kind of awful code, need to be reworked eventually. ew.
        const product_option_fragment: TProductOptionFragmentNew[] = (get(data, 'options') as unknown) as TProductOptionFragmentNew[]

        const options = parseDataProductOptions(product_option_fragment)
        const variants = parseDataVariants(data.variants.edges, options)
        const images = parseDataProductImages(data.images.edges)
        return {..._data, variants, options, images}
    }
}

export const parseProduct = parseDataProductFragment
export default parseProduct

//apollolink getApolloLink stuff
/* getApolloLink: new ApolloLink((operation, forward) => {
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

 */
