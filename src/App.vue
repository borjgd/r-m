<template>
  <div id="app">
    <div v-if="!showSideBar">
      <BaseHeader v-on:toggle-side-bar="toggleShowSideBar" />
      <router-view />
    </div>
    <Transition name="fade">
      <div v-if="showSideBar">
        <BaseSideBar v-on:toggle-side-bar="toggleShowSideBar" />
      </div>
    </Transition>
  </div>
</template>
<script>
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseSideBar from "@/components/layout/BaseSideBar.vue";
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}
</style>
