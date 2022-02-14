<template>
   <h1>New Post Page</h1>
   <form @submit.prevent="createNewPost" class="form-create">
      <div class="form-group">
         <label for="postTitleInput">Post title:</label>
         <input type="text" id="postTitleInput" class="form-control" v-model="title" required>
      </div>
      <div class="form-group">
         <label for="postTextInput">Post text:</label>
         <textarea class="form-control" id="postTextInput" rows="3" v-model="text" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
   </form>
</template>

<script>
   export default {
      emits: ['create', 'delete', 'edit'],
      props: ['posts'],
      data() {
         return {
            title: '',
            text: '',
            id: Math.random()
         }
      },
      methods: {
         createNewPost() {
            this.$router.push('/')
            this.$emit('create', this.id, this.title, this.text)
         }
      }
   }
</script>

<style lang="scss" scoped>
   h1 {
      margin-bottom: 30px;
   }

   .form-create {
      .form-group {
         margin-bottom: 20px;

         label {
            display: block;
            margin-bottom: 5px;
         }
      }
   }
</style>