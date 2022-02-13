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

#app {
  font-family: "Roboto Serif", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c84b31;
}

.layout {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
