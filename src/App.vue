<template>
  <div>
    <show-blogs />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";

export default {
  components: {
    AddBlog,
    ShowBlogs,
  },
  data() {},
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
