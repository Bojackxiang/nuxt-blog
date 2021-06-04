<template>
  <div class="post-page">
    single post id {{ postId }}
    <div class="post-page__content">
      <el-button>hello</el-button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    console.log("data ....");
    return {
      postId: this.$route.params.id,
    };
  },
  mounted() {
    console.log("mounted ....");
    // make a request to the backend
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/config.scss';
.post-page{
  // background-color: $color_1;
  background-color: $color_1;
  height:100px;
  &__content {
  }
}
</style>