<template>
  <div class="post-page">
    single post id {{ postId }}
    <div class="post-page__content">
      <div class="post-page__title">
        {{ retrivedPost ? retrivedPost.title : "default title" }}
      </div>
      <div class="post-page__content">
        {{ retrivedPost ? retrivedPost.content : "default content" }}
      </div>
      <div class="post-page__createAt">
        {{ retrivedPost ? retrivedPost.createdAt : "default createdAt" }}
      </div>
      <div class="post-page__error" v-show="Boolean(error)">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    // NOTE 使用 data 来做初始数据的展示
    return {
      postId: this.$route.params.id,
      content: "",
      title: "",
      createdAt: "",
      error: "",
    };
  },
 
  computed: {
    retrivedPost() {
      return this.$store.getters.post;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/config.scss";
.post-page {
  // background-color: $color_1;
  height: 100px;
  &__content {
  }
  &__error {
    color: red;
  }
}
</style>