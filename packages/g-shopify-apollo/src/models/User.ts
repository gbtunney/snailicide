import { Model } from '@vuex-orm/core'
import {  Attr, Str } from '@vuex-orm/core'

export default class User extends Model {
    // entity is a required property for all models.
    static entity = 'users'

    // List of all fields (schema) of the post model. `this.attr()` declares
    // a generic field type with a default value as the first argument.
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            email: this.attr('')
        }
    }
}

export class Post extends Model {
    static entity = 'posts'

    // `this.belongsTo(...)` declares this post belongs to a user. The first
    // argument is the `User` model class. The second is the field name for
    // the foreign key `userId`.
    static fields () {
        return {
            id: this.attr(null),
            userId: this.attr(null),
           // title: this.attr(''),
           // body: this.attr(''),
            published: this.attr(false),
            author: this.belongsTo(User, 'userId')
        }
    }
    id!: number | null


    @Str('')
    title!: string
    @Str('')
    body!: string


}
