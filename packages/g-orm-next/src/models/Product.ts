import {Model, Attr, Str, Bool, HasMany} from '@vuex-orm/core'
import {ProductImage, ProductVariant, ProductOption} from "./";
import {TProductFragment} from '.'
import useOrmRepositories from "./../composable/useOrmRepositories";

export class Product extends Model implements TProductFragment {
    static entity = 'products'

    @Attr('')
    id!: TProductFragment["id"]

    @Str('')
    type: "Product" = "Product"

    @Str('')
    handle!: TProductFragment["handle"]

    @Str('')
    title!: TProductFragment["title"]

    @Bool(false)
    available!: TProductFragment["available"]

    @Str('')
    productType!: TProductFragment["productType"]

    @Str('')
    vendor!: TProductFragment["vendor"]

    @Attr([])
    tags!: TProductFragment['tags']

    @Str('')
    onlineStoreUrl!: TProductFragment['onlineStoreUrl']

    @Str('')
    description!: TProductFragment['description']
    // @Str('')
    // descriptionHtml!: IShopifyProduct['descriptionHtml']

    @Attr(new Date())
    createdAt!: TProductFragment['createdAt']
    @Attr(new Date())
    updatedAt!: TProductFragment['updatedAt']
    @Attr(new Date())
    publishedAt!: TProductFragment["publishedAt"]

    @Attr(undefined)
    priceRange: TProductFragment['priceRange']

    @Attr(undefined)
    compareAtPriceRange: TProductFragment['compareAtPriceRange']

    @HasMany(() => ProductImage, 'product_id')
    images: TProductFragment['images']

    @HasMany(() => ProductVariant, 'product_id')
    variants = []

    @HasMany(() => ProductOption, 'product_id')
    options = []

    static repo(){
       return useOrmRepositories()
    }
    get Images( ) {
        return Product.repo().ProductImageRepository.value.where("product_id", this.id).orderBy('position').with('variants.options').all()
    }

    //@HasMany(() => ProductOptionValue, 'product_id')
    //  optionvalues!: ProductOptionValue[]
}

export default Product
