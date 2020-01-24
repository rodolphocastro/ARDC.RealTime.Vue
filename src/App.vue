<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="row" />
    <HelloWorld msg="Welcome to Your Vue.js App" class="row" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>
