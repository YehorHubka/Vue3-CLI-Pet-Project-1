<template>
   <div class="alert" v-if="alert" :class="alert.type">
      <h3 class="alert__title">{{ alert.title }}</h3>
      <p class="alert__message">{{ alert.text }}</p>
      <button class="btn" :class="'btn-' + alert.type" @click="$emit('close')">Close</button>
   </div>
</template>

<script>
   export default {
      emits: ['close'],
      props: ['alert']
   }
</script>

<style lang="scss" scoped>
   .alert {
      padding: 20px;
      border-left-width: 7px;
      border-left-style: solid;
      margin: 0 0 30px;
      position: relative;
      border-radius: 5px;
      &.primary {
         border-color: #42b983;
         background-color: #f8f8f8;
      }
      &.danger {
         border-color: #e53935;
         background-color: #f8f8f8;
      }
      &.warning {
         border-color: #c25205;
         background-color: #f8f8f8;
      }
      &__message {
         font-size: 16px;
         line-height: 1.4;
         margin: 0 0 15px;
      }
      &__title {
         margin-bottom: 15px;
      }
   }
</style>