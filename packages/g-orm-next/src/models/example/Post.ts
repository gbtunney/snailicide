import {Attr, Model} from '@vuex-orm/core'
import User from './User'
import { Str, HasMany,BelongsTo } from '@vuex-orm/core'

export class Post extends Model {
    static entity = 'posts'

    @Attr(null)
    id?: number | null

    @Attr(null)
    userId!: number | null

    @Str('')
    title!: string

    @Str('')
    body!: string

    @Attr(null)
    published!: number | null

    @BelongsTo(() => User, 'userId')
    author!: User

    // `this.belongsTo(...)` declares this post belongs to a user. The first
    // argument is the `User` model class. The second is the field name for
    // the foreign key `userId`.

}
export default Post
export { Post as PostType }

