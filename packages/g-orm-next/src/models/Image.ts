import {Attr, Model} from '@vuex-orm/core'
import User from './User'
import { Str, Num,HasMany,BelongsTo } from '@vuex-orm/core'

export class Image extends Model {
    static entity = 'images'

    @Attr(null)
    id!: number | string

    @Str(null)
    created_at!:string

    @Num(null)
    position!: number

    @Str(null)
    updated_at!:string

    @Attr(null)
    product_id!: number | string

    @Str(null)
    src!:string

    @Attr([])
    variant_ids!: string[]|[]



    // `this.belongsTo(...)` declares this post belongs to a user. The first
    // argument is the `User` model class. The second is the field name for
    // the foreign key `userId`.

}
export default Image
