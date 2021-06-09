<template>
  <div>
    create a new post
    <AppButton @click="createNewPost">create a new</AppButton>
  </div>
</template>

<script>
import DelayRequest from "../../utils/formUtils";

export default {
  methods: {
    async createNewPost() {
      // REVIEW 由此可见，commit 是一个 sync 的方法
      this.$store.dispatch("TOGGLE_LOADING");

      this.$store.dispatch("TOGGLE_LOADING");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

