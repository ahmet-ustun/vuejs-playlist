<template>
  <header>
    <h1 v-on:mouseover="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
      this.title = "Vue Wizards";
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
