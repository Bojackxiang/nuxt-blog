<template>
  <div class="post-page">
    single post id {{ postId }}
    <div class="post-page__content">
      <div class="post-page__title">
        {{ title }}
      </div>
      <div class="post-page__content">
        {{content}}
      </div>
      <div class="post-page__createAt">
        {{createdAt}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      postId: this.$route.params.id,
      content: '', 
      title: '', 
      createdAt: ''
    };
  },
  async asyncData(context) {
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
      console.log(error);
      return { error: error.message };
    }
  },
  mounted() {
    console.log("mounted ....");
    
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
}
</style>