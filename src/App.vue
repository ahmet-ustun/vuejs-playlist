<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import ListBlogs from "./components/ListBlogs.vue";

export default {
  components: {
    'app-header': Header,
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
