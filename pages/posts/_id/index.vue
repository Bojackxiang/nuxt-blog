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
  async fetch() {
    // NOTE 如果在这边直接 throw，会直接进入到 error page
    // NOTE fetch 里面是可以使用 this 的
    // 这是和 asyncdata 最不同的地方
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const { data } = response;

      this.content = "post content";
      this.title = data.title;
      this.createdAt = new Date().toString();

      // 因为能够 access this，所以可以直接 dispatch
      const post = {
        postId: this.postId,
        content: this.content,
        title: this.title,
        createdAt: this.createdAt,
      };

      this.$store.commit("setPosts", [post]);
    } catch (error) {
      return { error: error.message };
    }
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