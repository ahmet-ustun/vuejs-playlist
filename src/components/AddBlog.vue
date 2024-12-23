<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label for="blog-title">Blog Title</label>
      <input id="blog-title" type="text" v-model.lazy="blog.title" required />
      <label for="blog-content">Blog Content</label>
      <textarea
        id="blog-content"
        v-model.lazy="blog.content"
        required
      ></textarea>
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input
          id="ninjas"
          type="checkbox"
          value="ninjas"
          v-model="blog.categories"
        />
        <label for="wizards">Wizards</label>
        <input
          id="wizards"
          type="checkbox"
          value="wizards"
          v-model="blog.categories"
        />
        <label for="mario">Mario</label>
        <input
          id="mario"
          type="checkbox"
          value="mario"
          v-model="blog.categories"
        />
        <label for="cheese">Cheese</label>
        <input
          id="cheese"
          type="checkbox"
          value="cheese"
          v-model="blog.categories"
        />
      </div>
      <label for="author">Author:</label>
      <select id="author" v-model="blog.author">
        <option v-for="author in authors">
          {{ author }}
        </option>
      </select>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Net Ninja", "Angular Avenger", "Vue Vindicator"],
    };
  },
  methods: {},
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
