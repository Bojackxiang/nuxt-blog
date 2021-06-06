<template>
  <div class="posts-page">
    <div class="post-page__header"></div>

    <PostPreview
      title="post.title"
      content="post.content"
      createAt="post.createAt"
      v-for="(post, index) in posts"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  // REVIEW 在 page 里面使用 asyncdata 而不是 data，
  // 因为data 会被 asyncData直接覆盖掉
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    return {
      posts: [
        {title: 'title', content: 'content', createAt: new Date()}
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
  &__header {
    min-height: 20px;
    background-color: antiquewhite;
  }
}
</style>