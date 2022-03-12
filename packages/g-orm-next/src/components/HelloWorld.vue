<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="funcMount()">click</button>
<!--    <article :key="post.id" v-for="post in posts">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>-->
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapRepos, Model, ModelOrRepository} from '@vuex-orm/core'
import {Post,PostType} from './../models/example/Post'
import {User} from './../models/example/User'
import { ref,onMounted,computed,PropType,Ref ,SetupContext,Prop,defineProps ,defineEmits,withDefaults} from 'vue';
import {mapObjIndexed} from "ramda";
import { useStore } from 'vuex'
const post = PostType
import ShopifyBuy,{Product} from 'shopify-buy'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed:{
    ...mapRepos({
      postRepo: Post,
      userRepo:User
    }),
    posts(){
      return this.postRepo.all()
    }
  } ,
  mounted () {
    // Assuming this data is the response from the API backend.
    const posts = [
      {
        id: 1,
        title: 'Hello, world!',
        body: 'Some awesome body...',
        author: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    ]
    this.postRepo.save(posts)

  },
  setup(){

    const store = useStore()
    const PostRepo = computed(() => store.$repo(Post))

    const posts2 = [
      {
        id: 2,
        title: 'Hell2222222o, world!',
        body: 'Some awesome body...',
        author: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    ]
    onMounted(()=>{
    //  console.log("PostRep!!!cco",store.$repo(Post).save())

    })
    const funcMount = ()=>{
      console.log("PostRepo",PostRepo.value.all())

    }
    return {funcMount}
  }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
