<template>
  <div class="post-page">
    single post id {{ postId }}
    <div class="post-page__content">
      <div class="post-page__title">
        {{ title }}
      </div>
      <div class="post-page__content">
        {{ content }}
      </div>
      <div class="post-page__createAt">
        {{ createdAt }}
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
  async asyncData(context) {
    // NOTE 如果在这边直接 throw，会直接进入到 error page
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const { data } = response;

      return {
        content: "post content",
        title: data.title,
        createdAt: new Date().toString(),
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  created() {
    const post = {
      postId: this.postId,
      content: this.content,
      title: this.title,
      createdAt: this.createdAt,
    };

    this.$store.commit("setPosts", [
      {
        ...post,
      },
    ]);
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