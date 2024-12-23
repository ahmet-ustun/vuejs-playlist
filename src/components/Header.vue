<template>
  <header>
    <h1 v-on:mouseover="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from "../main.js";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      // this.$emit("changeTitle", "Vue Wizards");
      this.title = "Vue Wizards";
      bus.$emit("changeTitle", "Vue Wizards");
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
