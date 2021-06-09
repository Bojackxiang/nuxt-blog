<template>
  <button class="button" v-bind="$attrs" v-on="$listeners">
    <!-- <span class="text">Click me</span> -->
    <slot class="text"/>
  </button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      required: false,
    },
  },
  methods: {
    onClickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/config.scss";
.button {
  background-color: $color_1;
  min-height: 20px;
  padding: 15px;
  color: $color_white;
  border: 0;
  border-radius: 5px;
  .text{
    color: $color_white;
  }
}
</style>

// REVIEW 也可以往 slot 上面添加 class ，slot 会全盘接受
