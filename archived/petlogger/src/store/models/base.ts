/*breeder {
    description
    email
    id
    name
    address
    web
}
}*/

import { Model } from '@vuex-orm/core'

export  class Contact extends Model {
    static entity = 'contacts';
    static fields() {
        return {
            id: this.uid(),
            name: this.string(null).nullable(),
            web: this.string(null).nullable(),
            email: this.string(null).nullable(),
            description:this.string(null).nullable(),
          //  address:this.string(null).nullable()
        }
    }
    id!: string
    name!: string | null
    web!: string | null
    email!: string | null
    description!: string | null
}

export class Animal extends Model {

    static fields() {
        return {
            id: this.uid(),
            name: this.string(null).nullable(),
            sex: this.string(null).nullable(),
            email: this.string(null).nullable(),
            description:this.string(null).nullable(),

           /* jediHero: hero(episode: JEDI) {
            name
        }1  ``*/


          //  photo: this.hasOne(Asset,)
            //  address:this.string(null).nullable()
        }
    }


}
/*
name
sex*/
/*fileName
handle
id
url
width
height*/
export class Asset extends Model {
    static entity = 'assets';

    static fields() {
        return {
            id: this.uid(),
            handle: this.string(null).nullable(),
            url: this.string(null).nullable(),
            fileName:  this.string(null).nullable(),
            width: this.number(null).nullable(),
            height: this.number(null).nullable()
        }
    }
}

