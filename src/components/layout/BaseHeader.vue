<template>
  <header id="app-header">
    <div class="app-header layout">
      <nav class="nav">
        <ul class="nav--list">
          <li class="nav--logo">
            <router-link class="app-header-title" to="/">RM</router-link>
          </li>
          <li class="nav--item" v-bind:class="{ active: showResponsiveNavbar }">
            <router-link class="app-header-title" to="/rm">RM</router-link>
          </li>
          <li class="nav--item" v-bind:class="{ active: showResponsiveNavbar }">
            <router-link class="app-header-title" to="/about">
              About
            </router-link>
          </li>
          <li
            v-if="!showResponsiveNavbar"
            class="nav--toggle"
            @click="toggleSideBar"
          >
            <font-awesome-icon
              class="toggle-side-menu"
              icon="fa-solid fa-bars fa-4x"
            />
          </li>
          <li v-else class="nav--toggle" @click="toggleSideBar">
            <font-awesome-icon
              class="toggle-side-menu"
              icon="fa-solid fa-xmark fa-4x"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "BaseHeader",
  data() {
    return {
      windowWidth: window.innerWidth,
      showResponsiveNavbar: false,
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
      this.showResponsiveNavbar = !this.showResponsiveNavbar;
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
  background-color: #06020d;
}
.app-header {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}

.nav {
  width: 100%;
  padding: 5px 20px;
}

ul {
  list-style-type: none;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.nav--list li {
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
}

.nav--logo a:hover {
  text-decoration: none;
}

.nav--logo a,
.nav--toggle svg {
  font-size: 26px;
}

.nav--toggle svg {
  color: white;
  cursor: pointer;
}

/* Mobile menu */
.nav--list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.nav--toggle {
  order: 1;
}
.nav--item {
  width: 100%;
  text-align: center;
  order: 3;
  display: none;
}
.nav--item.active {
  display: block;
}

.nav--item.active:hover {
  background-color: #1e1b25;
}

/* Tablet menu */
@media all and (min-width: 600px) {
  .nav--list {
    justify-content: center;
  }
  .nav--logo {
    flex: 1;
  }
  .nav--toggle {
    flex: 1;
    text-align: right;
  }
  .nav--toggle {
    order: 2;
  }
}

/* Desktop menu */
@media all and (min-width: 900px) {
  .nav--item {
    display: block;
    width: auto;
  }
  .nav--toggle {
    display: none;
  }
  .nav--logo {
    order: 0;
  }
  .nav--item {
    order: 1;
  }
  .nav--list li {
    padding: 15px 10px;
  }
}
</style>
