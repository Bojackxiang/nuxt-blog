<template>
  <div>
    <form>
      <AppInput name="'username'" v-model="username"> hello </AppInput>
      <AppButton @click.prevent="submit">submit</AppButton>
      <AppButton @click.prevent="onCancel">cancel</AppButton>
    </form>

    

    <p>{{ username }}</p>
  </div>
</template>

<script>
import AppInput from "../../components/customizedComponents/AppInput.vue";
import AppButton from "../../components/customizedComponents/AppButton.vue";
import { formClean } from "../../utils/formUtils";
export default {
  components: {
    AppInput,
    AppButton,
  },
  data() {
    return {
      username: "hello",
    };
  },
  methods: {
    updateInput(inputValue) {
      console.log(inputValue);
    },
    submit() {
      console.log("submit");
      console.log(this.username);
      formClean(this.username);
    },
    onCancel() {
      console.log("cancel");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>