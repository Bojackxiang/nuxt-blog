<template>
  <div>
    create a new post
    <button @click="createNewPost">create a new</button>
  </div>
</template>

<script>
export default {
  methods: {
    createNewPost() {
      this.$axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>