import { Repository,Query,Item,Collection } from '@vuex-orm/core'
import {Product} from './../models'
export interface repoTest extends Repository<Product>{
    productHandleToID: (handle:string)=> Item<Product>|undefined,
    getLatestPublished: ()=> Collection<Product>,
}
// implements repoTest
export class ProductRepository extends Repository<Product> implements repoTest{
    use = Product

     getProductByHandle(handle:string|undefined, relations:string|boolean = true):Item<Product>|undefined {  //todo: withs????
        const _query = this.where("handle", handle)
        console.log("QUERRRRRRRY ", _query)
         return _query.first()
     //   if (relations == true) return _query.withAll().first();
      //  if (relations == false) return _query.first();
       // if (R.is(String, relations)) return _query.with(relations).first();
    }
    productHandleToID(handle:string):Item<Product>|undefined{
        const _product = this.where("handle", handle).first();
        return (_product) ? _product : undefined
    }

    getLatestPublished () {
        return this
            .where('public', true)
            .orderBy('publishedAt', 'desc')
            .get()
    }
}
export type TProductRepository = ProductRepository
