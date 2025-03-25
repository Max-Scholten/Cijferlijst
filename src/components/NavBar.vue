<template>          <!-- NavBar.vue -->
  <nav>
    <router-link v-for="(route, index) in $router.getRoutes()" :key="index"
                 v-bind:to="route.path"><button>{{ route.name }}</button></router-link>
  </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style>
  button {
    margin : 12px;
  }
  .router-link-exact-active > button {
    color : red;
  }
</style>