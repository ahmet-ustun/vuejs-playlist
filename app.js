new Vue({
  el: "#vue-app",
  data: {
    name: "Ahmet",
    job: "Developer",
  },
  methods: {
    greet: function (time) {
      return `Good ${time}, ${this.name}!`;
    },
  },
});
