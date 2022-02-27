<template>
  <div class="home">
    <div class="layout">
      <div class="home-message">
        <div class="home-message-title">
          <h2>Welcome!</h2>
        </div>
        <div>
          <p class="home-message-text">
            RM allows you to create your own RMs including as many steps as you
            need, organizing the steps in the order you like and marking those
            steps completed already.
          </p>
          <p class="home-message-text">
            This was thought to be a secret project focused on developers
            technologies however you can use this app to create a secret project
            about anything you want. You decide what to do!!.
          </p>
        </div>
      </div>
      <div class="home-roadmaps">
        <RoadmapList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoadmapList from "@/components/RoadmapList.vue";

export default {
  name: "Home",
  components: {
    RoadmapList,
  },
};
</script>
<style scoped>
.home {
  background-color: #06020d;
  background: linear-gradient(to bottom, #06020d, #0b1222 50%, #06020d);
  padding: 20px 0px;
}
.home-message {
  color: white;
}
.home-message-text {
  margin: 20px 0;
}
</style>
