<template>
  <header id="app-header">
    <div class="app-header layout">
      <div class="app-header-logo">
        <router-link class="app-header-title" to="/">
          Secret Project
        </router-link>
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
  background-color: #191919;
}
.app-header {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
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
