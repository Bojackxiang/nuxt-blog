<template>
  <div class="posts-page">
    <div class="post-page__header"></div>
    {{ hello }}
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
  asyncData(context) {
    console.log(context);
    // REVIEW null 操作error，第二个参数就是要 return 的数据
    // 但是现在 callback 已经不能使用了
    // callback(null, {
    //   posts: [{ title: "title", content: "content", createAt: new Date() }],
    // });
    // REVIEW asyncData 里面是拿不到 this 这个关键词的
    // REVIEW 避免 async data 和 data中使用同一个名字，因为 async data 会更新 data中的数据
    return  {
      posts: [{ title: "title", content: "content", createAt: new Date() }]
    }
  },
  data() {
    return {
      hello: "hello",
      posts: [],
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