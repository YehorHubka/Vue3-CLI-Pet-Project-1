<template>
   <ul v-if="posts.length !== 0" class="post-list">
      <li v-for="post in posts" :key="post.id">
         <div class="post">
            <h3 class="post__title">
               {{ post.title }}
            </h3>
            <p class="post__body">{{ post.body }}</p>
            <router-link class="btn btn-primary" :to="'/' + post.id">
               Read more
            </router-link>
         </div>
      </li>
   </ul>
   <div v-else>
      There is no posts yet. Go and
      <router-link to="/create">create</router-link>
      some!
   </div>
</template>

<script>
   export default {
      props: ['posts'],
   }
</script>

<style lang="scss" scoped>
   .post-list {
      list-style: none;
      margin: 30px 0 0;
      padding: 0;

      & li {
         margin-bottom: 20px;
      }
   }

   .post {
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;

      &__title {
         margin: 0 0 15px;

         & a {
            color: #000;
            text-decoration: none;

            &:hover {
               text-decoration: underline;
            }
         }
      }

      &__body {
         margin: 0 0 20px;
      }
   }
</style>