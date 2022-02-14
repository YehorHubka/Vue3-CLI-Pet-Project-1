<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
         <router-link class="navbar-brand" to="/">PostApp</router-link>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/create">Create new post</router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
   export default {

   }
</script>

<style scoped>

</style>