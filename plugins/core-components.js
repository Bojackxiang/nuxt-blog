import Vue from 'vue';

import AppButton from '../components/customizedComponents/AppButton.vue'
import AppInput from '../components/customizedComponents/AppInput.vue'

// REVIEW set the component as a global component
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)