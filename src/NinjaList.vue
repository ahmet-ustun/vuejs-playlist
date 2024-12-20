<template>
  <div id="ninja-list">
    <h1>These are the ninjas!</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "Luigi"],
    };
  },
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>
