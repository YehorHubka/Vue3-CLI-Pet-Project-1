<template>
  <TheNavbar/>
  <div class="container pt-5 pb-5">
    <router-view />
  </div>
</template>

<script>
  import TheNavbar from "./components/TheNavbar";
  export default {
    components: {TheNavbar}
  }
</script>

<style lang="scss">

</style>
