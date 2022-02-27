<template>
  <div id="app">
    <div v-if="!showSideBar">
      <BaseHeader v-on:toggle-side-bar="toggleShowSideBar" />
      <router-view />
    </div>
    <div v-else>
      <BaseSideBar v-on:toggle-side-bar="toggleShowSideBar" />
    </div>
  </div>
</template>
<script>
import BaseHeader from "@/components/UI/BaseHeader.vue";
import BaseSideBar from "@/components/UI/BaseSideBar.vue";
export default {
  name: "App",
  data() {
    return {
      showSideBar: false,
    };
  },
  components: {
    BaseHeader,
    BaseSideBar,
  },
  methods: {
    toggleShowSideBar() {
      this.showSideBar = !this.showSideBar;
    },
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
