<template>
   <ul v-if="comments.length !== 0" class="comment-list">
      <li v-for="comment in comments" :key="comment.id">
         <div class="comment">
            <h4 class="comment__title">
               {{ comment.name }}
            </h4>
            <h5 class="comment__email">{{comment.email}}</h5>
            <p class="comment__body">{{ comment.body }}</p>
         </div>
      </li>
   </ul>
   <div class="comment-alert" v-else>There is no comments yet.</div>
</template>

<script>
   export default {
      props: ['comments'],
   }
</script>

<style lang="scss" scoped>
   .comment-list{
      list-style: none;
      margin: 0;
      padding: 0;
      & li{
         margin-bottom: 20px;
      }
   }
   .comment{
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
      &__title{
         margin: 0 0 15px;
      }
      &__email{
         margin: 0 0 15px;
      }
      &__body{
         margin: 0 0 20px;
      }
   }
</style>