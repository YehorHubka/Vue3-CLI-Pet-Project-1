<template>
   <app-alert
        @close="alert = null"
        :alert="alert"
        v-if="atHomePage"
   ></app-alert>

   <div class="posts" v-if="atHomePage">
      <h1>All posts</h1>
      <AppLoader v-if="loading"/>
      <AppPostList v-else :posts="posts"/>
   </div>

   <router-view
        @create="createPost"
        @delete="deletePost"
        @edit="editPost"
        :posts="posts"
   >
   </router-view>
</template>

<script>
   import AppPostList from "../components/AppPostList";
   import AppLoader from "../components/AppLoader"
   import AppAlert from "../components/AppAlert";
   import AppCreatePost from "../components/AppCreatePost";
   import axios from "axios";

   export default {
      name: 'Home',
      data() {
         return {
            posts: [],
            loading: false,
            alert: null,
            checkingLength: []
         }
      },
      computed: {
         atHomePage() {
            return this.$route.path === '/'
         }
      },
      methods: {
         async deletePost(id) {
            this.loading = true
            try {
               const post = this.posts.find(post => post.id === parseInt(id))
               await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}/`)
               this.posts = this.posts.filter(post => post.id !== parseInt(id))
               this.alert = {
                  type: 'primary',
                  title: 'Post was deleted!',
                  text: `Post "${post.title}" was deleted successfully!`
               }
            } catch (e) {
               console.log(e)
            }
            this.loading = false
         },
         async editPost(id, title, text) {
            this.loading = true
            try {
               //const post = this.posts.find(post => post.id === parseInt(id))
               await axios.put(
                  `https://jsonplaceholder.typicode.com/posts/${id}/`,
                  {
                     title: title,
                     body: text
                  },
                  {
                     headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                     }
                  }
               ).then(response => {
                  let idx = this.posts.findIndex(post => post.id === parseInt(id))
                  this.posts[idx] = response.data

                  this.alert = {
                     type: 'primary',
                     title: 'Post was edited!',
                     text: `Post "${title}" was edited successfully!`
                  }
               })
            } catch (e) {
               this.alert = {
                  type: 'danger',
                  title: 'Error. Something go wrong!',
                  text: `Can't edit post. ${e}`
               }
            }
            this.loading = false
         },
         async createPost(id, title, text) {
            this.loading = true
            try {
               await axios.post(
                  `https://jsonplaceholder.typicode.com/posts/`,
                  {
                     userId: 1,
                     id: id,
                     title: title,
                     body: text
                  },
                  {
                     headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                     }
                  }
               ).then(response => {
                  this.posts.unshift(response.data)

                  //check for same id's and throw some error
                  let checkId = this.posts.find(post => post.id === parseInt(response.data.id))
                  this.checkingLength.push(checkId.title)

                  if (this.checkingLength.length > 1) {
                     throw new Error(`There are ${this.checkingLength.length} elements already have the same post ID. Posts: ${this.checkingLength}`)
                  } else {
                     this.alert = {
                        type: 'primary',
                        title: 'Post was created!',
                        text: `Post "${title}" was created successfully!`
                     }
                  }
               })
            } catch (e) {
               this.alert = {
                  type: 'warning',
                  title: 'Warning!',
                  text: e
               }
            }

            this.loading = false
         },
         async getDataFromApi() {
            this.loading = true
            await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
               .then(response => {
                  this.posts = response.data
               })
            this.loading = false
         }
      },
      mounted() {
         this.getDataFromApi()
      },
      components: {
         AppPostList,
         AppLoader,
         AppAlert,
         AppCreatePost
      }
   }
</script>
