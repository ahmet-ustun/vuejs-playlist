new Vue({
  el: "#vue-app",
  data: {
    name: "Ahmet",
    job: "Developer",
    age: 30,
  },
  methods: {
    greet: function (time) {
      return `Good ${time}, ${this.name}!`;
    },
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
  },
});
