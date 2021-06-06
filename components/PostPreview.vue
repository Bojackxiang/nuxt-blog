<template>
  <el-row class="post-preview-wrapper">
    <el-col
      class="post-preview-wrapper__card-body"
      :md="6"
      :sm="12"
      :xs="24"
      v-for="number in 6"
      :key="number"
    >
      <div class="post-preview-wrapper__bg" />
      <div class="post-preview-wrapper__header">
        <span class="post-preview-wrapper__header__title">
          {{ title }}
        </span>
        <span class="post-preview-wrapper__header__createAt">{{
          formatedDate
        }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import moment from "moment";
export default {
  name: "post-preview",
  props: {
    title: { type: String, required: true },
    content: { type: String, required: false },
    createAt: { type: Date, required: true },
  },
  data() {
    return {
      title: "",
      content: "",
      createdAt: "",
    };
  },
  computed: {
    formatedDate: () => moment(new Date()).format("YYYY/MM/DD"),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.post-preview-wrapper {
  font-size: 1.6rem;
  text-align: center;
  &__card-body {
  }
  &__bg {
    background-image: url("~assets/images/header.jpeg");
    min-height: 120px;
  }
  &__header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &__title {
      display: block;
      font-size: 1.5rem;
    }
    &__createAt {
      display: block;
      font-size: 0.8rem;
    }
  }
}
</style>