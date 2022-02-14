<template>
   <form @submit.prevent="sendNewData" class="form-edit">
      <div class="form-group">
         <label for="postTitleInput">Post title:</label>
         <input type="text" id="postTitleInput" class="form-control" v-model="newTitle">
      </div>
      <div class="form-group">
         <label for="postTextInput">Post text:</label>
         <textarea class="form-control" id="postTextInput" rows="3" v-model="newText"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
   </form>
</template>

<script>
   export default {
      props: ['title', 'body'],
      emits: ['edit'],
      data() {
         return {
            newTitle: this.title,
            newText: this.body
         }
      },
      methods: {
         sendNewData() {
            //this.$router.push('/')
            this.$emit('edit', this.newTitle, this.newText)
         }
      }
   }
</script>

<style lang="scss" scoped>
   .form-edit{
      .form-group{
         margin-bottom: 20px;
         label{
            display: block;
            margin-bottom: 5px;
         }
      }
   }
</style>