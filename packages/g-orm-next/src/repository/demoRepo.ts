import { Repository } from '@vuex-orm/core'

class PostMetaRepository extends Repository {
    getCategoryAndType () {
        return {
            category: this.getCategory(),
            type: this.getType()
        }
    }

    getCategory () {
       // return this.repo(PostCategory).all()
    }

    getType () {
        //return this.repo(PostType).all()
    }
}
