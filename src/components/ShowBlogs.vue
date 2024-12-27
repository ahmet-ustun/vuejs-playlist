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
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    rainbow(el, binding, vnode) {
      el.style.color = "#" + Math.random().toString().slice(2, 8);
    },
    theme(el, binding, vnode) {
      if (binding.value === "wide") {
        el.style.maxWidth = "1200px";
      } else if (binding.value === "narrow") {
        el.style.maxWidth = "560px";
      }

      if (binding.arg === "column") {
        el.style.background = "#ddd";
        el.style.padding = "20px";
      }
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
