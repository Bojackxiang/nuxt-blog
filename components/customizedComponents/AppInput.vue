<template>
  <div class="input-wrapper">
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="(e) => onInputChange(e)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    onInputChange(e) {
      // REVIEW 下面的 这个 input 是不能变的
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
}
</style>


// REVIEW <Vue 知识> 这边困惑了一会，相当于外面 v-model 一个 内部的数据
// 进来一个 value 就完事了 （v-model）传捡来的
// 内部组件在给一个 @input="(e) => onInputChange(e)"
// 就能够和外面的 value 直接进行绑定了