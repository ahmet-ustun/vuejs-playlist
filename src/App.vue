<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "This is your first Vue application!",
    };
  },
  methods: {
    greeting() {
      return "Hello world!";
    },
  },
};
</script>

<style></style>
