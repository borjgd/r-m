<template>
  <div class="rm">
    <a class="rm-item" v-for="item in rmResume" v-bind:key="item.id">
      <h2>{{ item.rmTitle }}</h2>
      <p>{{ item.rmResume }}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: "RoadmapList",
  data() {
    return {
      rmResume: [
        {
          id: "1",
          rmTitle: "2019",
          rmResume: "RM for 2019",
        },
        {
          id: "2",
          rmTitle: "2020",
          rmResume: "RM for 2020",
        },
        {
          id: "3",
          rmTitle: "2021",
          rmResume: "RM for 2021",
        },
        {
          id: "4",
          rmTitle: "2022",
          rmResume: "RM for 2022",
        },
      ],
    };
  },
};
</script>
<style scoped>
.rm {
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.rm-item {
  background-color: #130e1b;
  border-radius: 10px;
  min-width: 310px;
  margin: 10px 0px;
  padding: 10px 10px;
  color: white;
}

.rm-item:hover {
  cursor: pointer;
  background-color: #1b1720;
}

.rm-item > h2 {
  margin-bottom: 10px;
}
</style>
