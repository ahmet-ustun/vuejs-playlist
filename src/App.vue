<template>
  <div>
    <app-header v-bind:title="title" />
    <ninja-list v-bind:ninjas="ninjas" />
    <hr />
    <ninja-list v-bind:ninjas="ninjas" />
    <app-footer v-bind:title="title" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NinjaList from "./components/NinjaList.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "app-header": Header,
    NinjaList,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "Vue Ninjas",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
    };
  },
};
</script>

<style></style>
