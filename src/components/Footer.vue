<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
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
    return {
      copyright: "Copyright 2024",
    };
  },
  created() {
    bus.$on("changeTitle", (newTitle) => {
      this.title = newTitle;
    });
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
