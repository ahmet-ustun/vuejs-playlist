<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import ListBlogs from "./components/ListBlogs.vue";

export default {
  components: {
    AddBlog,
    ShowBlogs,
    ListBlogs,
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
