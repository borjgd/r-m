<template>
  <div class="home">
    <div class="home-message">
      <div class="home-message-title">
        <h2>Welcome!</h2>
      </div>
      <div>
        <p class="home-message-text">
          Secret project is an app focused on giving the user the chance to create custom secret projetcs.
          It is an effort to have a record of the technologies I have learned every past year and the technolonogies 
          I want to learn the current year. 
        </p>
        <p class="home-message-text">
          This is something you can do with pen and paper but I wanted to create an app like this and make
          it interactive.
        </p>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  padding-top: 20px;
}
.home-message-text{
  margin: 10px 0;
}
</style>
