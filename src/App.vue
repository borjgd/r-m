<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  background-color: #191919;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c84b31;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
