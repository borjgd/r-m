<template>
  <div class="rm">
    <a class="rm-item" v-for="item in rmList" v-bind:key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </a>
    <a href="" title="Add RM" class="rm-item rm-item-add">
      <font-awesome-icon
        icon="fa-solid fa-circle-plus"
        size="2x"
        title="Add new RM"
      />
      <p>Add new RM</p>
    </a>
  </div>
</template>
<script>
import { getRM } from "../api/lib/rm.js";
export default {
  name: "RoadmapList",
  data() {
    return {
      rmList: [],
    };
  },
  async created() {
    let res = await getRM();
    this.rmList = res.data;
    console.log(res.data);
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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;
  text-decoration: none;
}
</style>
