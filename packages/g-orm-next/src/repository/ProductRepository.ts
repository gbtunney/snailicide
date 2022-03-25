import {Repository, Query, Item, Collection} from '@vuex-orm/core'
import {Product} from './../models'
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {isUndefined, isNotUndefined} from './../scripts/generic'
import parseProduct, {TProductReturnParsed} from "./../scripts/parseProduct";
import {ProductByHandleQuery} from "./../graphql/types/generated-types";

export interface IProductRepo extends Repository<Product> {
    getProductByHandle: (handle: string) => Item<Product> | undefined,
    productHandleToID: (handle: string) => string | undefined,
    getLatestPublished: () => Collection<Product>,
}

export class ProductRepository extends Repository<Product> implements IProductRepo {
    use = Product
    saveUnparsed<T = any, R = unknown>(data: ProductByHandleQuery, doRefresh = true) {  //todo: withs????
        if (<ProductByHandleQuery>isNotUndefined(data)) {
            const parsedProduct = parseProduct(data)
            if (isNotUndefined<TProductReturnParsed>(parsedProduct)) {
                const result = this.getProductByHandle(parsedProduct.handle)
                if (result !== undefined || (result && doRefresh)) {
                    const _result = this.save(result)
                    console.warn("_result for save", _result, data)
                }
            }
        }
    }

    getProductByHandle(handle: string | undefined, relations: string | boolean = true): Product | undefined {  //todo: withs????
        const _query = this.where("handle", handle)
        let result: Item<Product> = _query.first()
        if (isNotUndefined<Product>(result)) {
            if (relations == true) result = _query.withAllRecursive(3).first(); ///should be withAll
            if (relations == false) result = _query.first();
            if (RA.isString(relations)) result = _query.with(relations).first();
            if (isNotUndefined<Product>(result)) return result
        }
    }

    productHandleToID(handle: string | undefined): string | undefined {
        if (isUndefined(handle)) return undefined
        const _product = this.where("handle", handle).first();
        if (isNotUndefined<Product>(_product)) {
            return _product.id
        }
    }

    getLatestPublished() {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}
