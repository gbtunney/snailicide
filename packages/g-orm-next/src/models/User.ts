import { Model, Attr, Str, HasMany } from '@vuex-orm/core'
import Post from './Post'

export class User extends Model {
    // entity is a required property for all models.
    static entity = 'users'

    @Attr(null)
    id!: number | null

    @Str('')
    name!: string

    @HasMany(() => Post, 'userId')
    posts?: Post[]
}
export default User
export {User as UserType}
