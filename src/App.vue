<template>                                                                                     <!-- App.vue -->
  <img alt="Vue logo" src="./assets/vue.svg"><br/>
  <nav-bar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "../src/components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>