<template>
  <div>
    <app-header />
    <ninja-list />
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
    return {};
  },
};
</script>

<style></style>
