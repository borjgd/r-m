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
          <div v-if="windowWidth > 768" class="nav-item">
            <router-link class="app-header-title" to="/secreproject">
              Secret Project
            </router-link>
          </div>
          <div v-if="windowWidth > 768" class="nav-item">
            <router-link class="app-header-title" to="/about">
              About
            </router-link>
          </div>
          <div v-if="windowWidth <= 768" class="nav-item">
            <font-awesome-icon
              class="toggle-side-menu"
              icon="fa-solid fa-bars fa-4x"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newHeight) {
      console.log(newHeight);
    },
  },
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

.toggle-side-menu {
  color: white;
  font-size: 26px;
}
</style>
