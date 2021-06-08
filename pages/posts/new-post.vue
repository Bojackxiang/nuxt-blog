<template>
  <div>
    create a new post
    <button @click="createNewPost">create a new</button>
  </div>
</template>

<script>
import { delayRequest } from '../../utils/formUtils';
export default {
  methods: {
    async createNewPost() {
      // REVIEW 由此可见，commit 是一个 sync 的方法
      this.$store.dispatch('TOGGLE_LOADING')

      await delayRequest(
        'https://jsonplaceholder.typicode.com/posts', 
        5000, 
        this.$axios
      )
      
      this.$store.dispatch('TOGGLE_LOADING')
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

