<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
const signalR = require("@microsoft/signalr");

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost/broadcastHub")
      .build();

    connection.start().then(console.log("Connected"));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
