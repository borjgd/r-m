<template>
  <header id="app-header">
    <div class="app-header">
      <router-link class="app-header-title" to="/">Secret Project</router-link>
    </div>
    <div class="nav">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link class="app-header-title" to="/secreproject">
            Secret Project
          </router-link>
        </div>
        <div class="nav-item">
          <router-link class="app-header-title" to="/about">
            About
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
#app-header {
  display: flex;
  justify-content: space-between;
}
.app-header {
  padding: 20px 0px;
}
.app-header-title {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
.nav {
  display: flex;
  align-items: center;
}
.nav-links {
  display: flex;
  padding: 0 10px;
}
.nav-item {
  padding: 0 10px;
}
</style>
