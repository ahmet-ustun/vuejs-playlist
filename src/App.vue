<template>
  <div>
    <app-header />
    <ninja-list v-bind:ninjas="ninjas" />
    <app-footer />
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
