<template>
  <div>
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show Form 1</button>
    <button v-on:click="component = 'form-two'">Show Form 2</button>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper.vue";
import FormOne from "./components/FormOne.vue";
import FormTwo from "./components/FormTwo.vue";

export default {
  components: {
    "form-helper": FormHelper,
    "form-one": FormOne,
    "form-two": FormTwo,
  },
  data() {
    return { component: "form-one" };
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
