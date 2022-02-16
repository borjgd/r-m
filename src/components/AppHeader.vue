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
          <div v-if="!mobile" class="nav-item">
            <router-link class="app-header-title" to="/secreproject">
              Secret Project
            </router-link>
          </div>
          <div v-if="!mobile" class="nav-item">
            <router-link class="app-header-title" to="/about">
              About
            </router-link>
          </div>
          <div v-if="mobile" @click="toggleSideBar" class="nav-item">
            <font-awesome-icon
              class="toggle-side-menu"
              icon="fa-solid fa-bars fa-4x"
            />
          </div>
          <div class="side-bar" v-if="showSideBar">
            <router-link class="app-header-title" to="/">
              Secret Project
            </router-link>
            <router-link class="app-header-title" to="/secreproject">
              Secret Projects
            </router-link>
            <router-link class="app-header-title" to="/about">
              About
            </router-link>
            <button class="btn" @click="toggleSideBar">
              <font-awesome-icon
                class="toggle-side-menu"
                icon="fa-solid fa-xmark fa-4x"
              />
            </button>
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
      showSideBar: false,
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
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
  computed: {
    mobile: function () {
      return this.windowWidth > 768 ? false : true;
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
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inset: 0;
  position: fixed;
  background-color: #191919;
}
.side-bar > ul {
  list-style: none;
}
.side-bar > * {
  margin-top: 25px;
}

.side-bar > .btn {
  border-style: none;
  background-color: #191919;
  position: fixed;
  top: 0px;
  right: 45px;
  margin-top: 20px;
}
</style>
