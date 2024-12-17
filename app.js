new Vue({
  el: "#vue-app",
  data: {
    name: "Ahmet",
    job: "Developer",
    age: 30,
    x: 0,
    y: 0,
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
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("You clicked me!");
    },
  },
});
