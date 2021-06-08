<template>
  <div>
    <Header />
    <loading v-if="loadingDisplay"/>

    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/Header";
import Loading from "../components/customizedComponents/AppLoading.vue";
export default {
  components: {
    Header,
    Loading,
  },
  computed: {
    loadingDisplay() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style>
html,
html {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
