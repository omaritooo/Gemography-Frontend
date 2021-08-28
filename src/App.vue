<template >
  <div id="app">
    <h1 class="pt-10 mb-10 text-3xl text-center">GITHUB API</h1>
    <Github />
  </div>
</template>

<script>
import Github from "./components/Github.vue";
export default {
  name: "App",
  components: {
    Github,
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/segoe-ui-4");

#app {
  font-family: "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #006494;
}
</style>
