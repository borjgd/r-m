<template>
  <div class="rm">
    <a class="rm-item" v-for="item in rmResume" v-bind:key="item.id">
      <h2>{{ item.rmTitle }}</h2>
      <p>{{ item.rmResume }}</p>
    </a>
    <a href="" class="rm-item rm-item-add">
      <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x" />
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
          rmResume: "Roadmap for 2019",
        },
        {
          id: "2",
          rmTitle: "2020",
          rmResume: "Roadmap for 2020",
        },
        {
          id: "3",
          rmTitle: "2021",
          rmResume: "Roadmap for 2021",
        },
        {
          id: "4",
          rmTitle: "2022",
          rmResume: "Roadmap for 2022",
        },
      ],
    };
  },
};
</script>
<style scoped>
.rm {
  display: grid;
  gap: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 768px) {
  .rm {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .rm {
    grid-template-columns: 1fr;
  }
}

.rm-item {
  background-color: #130e1b;
  border-radius: 10px;
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

.rm-item-add {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
}
</style>
