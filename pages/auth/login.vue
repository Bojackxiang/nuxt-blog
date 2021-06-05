<template>
  <div>
    <AppInput 
      name="'username'" 
      v-model="username"
    />
    <p>{{username}}</p>
  </div>
</template>

<script>
import AppInput from '../../components/customizedComponents/AppInput.vue'
  export default {
    components:{
      AppInput
    },
    data(){
      return {
        username: 'hello'
      }
    },
    methods: {
      updateInput(inputValue ){
        console.log(inputValue);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>