<template>
  <div class="side-bar">
    <nav class="side-bar-nav">
      <ul class="side-bar-links">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li @click="closeSideBar">X</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "BaseSideBar",
  methods: {
    closeSideBar() {
      this.$emit("toggle-side-bar");
    },
  },
};
</script>
<style scoped>
.side-bar {
  background-color: #191919;
}
</style>
