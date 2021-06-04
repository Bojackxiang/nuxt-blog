<template>
  <div class="header-wrapper">  
    <nuxt-link to="/posts" class="header-wrapper__link-item">posts</nuxt-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
a.nuxt-link-active{
    color: red ;
  }
.header-wrapper{
  background-color: $color_1;;
  min-height: 50px;
  display: flex;
  align-items: center;
  &__link-item{
    margin: 10px;
    color: $color_4; 
    text-decoration: none;
  }
  
}

</style>