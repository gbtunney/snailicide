import { Model, Attr, Str, HasMany } from '@vuex-orm/core'
import Post from './Post'

atob("dhjhjgjhjhfjdgfjdgfhkjdg")
interface Itestmage {
    prop1:string
    prop2?:number
}
export class User extends Model implements Itestmage{
    // entity is a required property for all models.
    static entity = 'users'

    @Attr(null)
    id!: number | null

    @Str('')
    name!: string

    @HasMany(() => Post, 'userId')
    posts?: Post[]

    @Str('')
    prop1!: string
}
export default User
export {User as UserType}
