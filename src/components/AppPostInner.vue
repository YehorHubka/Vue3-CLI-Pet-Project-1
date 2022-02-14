<template>
   <div v-if="post">
      <router-link class="btn btn-primary" to="/">back to posts</router-link>
      <br><br>
      <div class="post-box">
         <h1 class="post-box__title">{{post.title}}</h1>
         <p class="post-box__body">{{post.body}}</p>
         <hr>
         <button class="btn btn-secondary" @click="editing = true">Edit post</button> |
         <button
              class="btn btn-danger"
              @click="delEmit"
         >
            Remove post
         </button>

         <div v-if="editing" class="post-edit">
            <h3 class="post-edit__title">Edit post form</h3>
            <AppEditPost @edit="editEmit" :title="post.title" :body="post.body" />
         </div>
      </div>

      <div class="comments">
         <h3 class="comments__title">Comments:</h3>
         <AppCommentList :comments="comments" />
      </div>
   </div>
</template>

<script>
   import axios from "axios";
   import AppCommentList from "./AppCommentList";
   import AppEditPost from "./AppEditPost";

   export default {
      name: 'postInner',
      emits: ['delete', 'edit'],
      props: ['posts', 'postId'],
      data() {
         return {
            comments: [],
            editing: false
         }
      },
      methods: {
         getComments() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments/?_limit=3`)
               .then(response => {
                  this.comments = response.data
               })
         },
         delEmit() {
            this.$router.push('/')
            this.$emit('delete', this.postId)
         },
         editEmit(title, text) {
            this.$router.push('/')
            this.$emit('edit', this.postId, title, text)
         },
      },
      mounted(){
         this.getComments()
      },
      computed: {
         post() {
            return this.posts.find(e => e.id === parseInt(this.postId))
         }
      },
      components: {
         AppCommentList,
         AppEditPost
      }
   }
</script>

<style lang="scss" scoped>
   .post-box{
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-bottom: 60px;
      &__title{
         margin-bottom: 20px;
      }
      &__body{
         margin-bottom: 0;
      }
   }
   .comments{
      &__title{
         margin-bottom: 20px;
      }
   }
   .post-edit{
      margin-top: 50px;
      &__title{
         margin-bottom: 20px;
      }
   }
</style>