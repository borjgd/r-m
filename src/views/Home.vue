<template>
  <div class="home">
    <div class="layout">
      <div class="home-message">
        <div class="home-message-title">
          <h2>Welcome!</h2>
        </div>
        <div>
          <p class="home-message-text">
            Secret project allows you to create your own secret projects
            including as many steps as you need, organizing the steps in the
            order you like and marking those steps completed already.
          </p>
          <p class="home-message-text">
            This was thought to be a secret project focused on developers
            technologies however you can use this app to create a secret project
            about anything you want. You decide what to do!!.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.home {
  background-color: #191919;
  padding: 20px 0px;
}
.home-message {
  color: white;
}
.home-message-text {
  margin: 20px 0;
}
</style>
