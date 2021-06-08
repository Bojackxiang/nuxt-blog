<template>
  <div class="loading-wrapper">
    loading...
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins.scss';
@import '../../assets/scss/config.scss';
.loading-wrapper {
  @include flex();
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0,0.5);
  z-index: 999;
  color: $color_white;
}
</style>