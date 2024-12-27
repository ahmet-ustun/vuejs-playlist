<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) =>
        blog.title.toLowerCase().match(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
