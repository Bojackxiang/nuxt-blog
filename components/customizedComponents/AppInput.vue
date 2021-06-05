<template>
  <div class="input-wrapper">
    <input 
      type="text"
      v-bind="$attrs"
      @input="e => onInputChange(e)"
    >
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      value: String,
      updateInput: Function,
    },
    data(){
      return {
        inputValue: ''
      }
    },
    mounted(){
      this.inputValue = this.value;
    },
    methods: {
      onInputChange(e){
        this.$emit('updateInput', this.name, e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-wrapper{

  }
</style>