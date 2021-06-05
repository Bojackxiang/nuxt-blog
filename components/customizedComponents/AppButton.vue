<template>
  <button class="button" v-bind="$attrs" v-on="$listeners">
    <slot />
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
</style>