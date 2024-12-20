<template>
  <div>
    <h1>{{ title }}</h1>
    <ninja-list />
  </div>
</template>

<script>
import NinjaList from './NinjaList.vue'

export default {
  components: {
    NinjaList,
  },
  data() {
    return {
      title: "Ninja App",
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
