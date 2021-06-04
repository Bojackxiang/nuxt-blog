<template>
  <div class="post-preview-wrapper">
    <div class="post-preview-wrapper__bg"></div>
    <div class="post-preview-wrapper__header">
      <h4 class="post-preview-wrapper__header__title">
        {{ title }}
      </h4>
      <div>{{ this.createdAt }}</div>
    </div>

    <div>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "post-preview",
  props: {
    postId: { type: String, required: true },
  },
  data() {
    return {
      title: "",
      content: "",
      createdAt: "",
    };
  },
  mounted() {
    this.title = "Test previuew";
    this.content = "Test comtent ...";
    this.createdAt = new Date().toString();
  },
};
</script>

<style lang="scss" scoped>
.post-preview-wrapper {
  font-size: 1.6rem;
  &__bg{
    background-image: url('~assets/images/header.jpeg');
    min-height: 120px;;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    background-color: aqua;
    align-items: center;
    &__title {
      color: red;
    }
  }
}
</style>