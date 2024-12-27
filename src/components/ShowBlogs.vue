<template>
  <div id="show-blogs" v-theme="'narrow'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id" exact>
        <h2 v-rainbow>
          {{ blog.title | toUppercase }}
        </h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import SearchMixin from "../mixins/SearchMixin.js";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get(
        "https://vuejs-playlist-275c1-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const blogsArray = [];

        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }

        this.blogs = blogsArray;
      });
  },
  mixins: [SearchMixin],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
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
