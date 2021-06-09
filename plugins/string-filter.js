import Vue from 'vue'

function stringFilter(inputValue) {
  
  return inputValue.toUpperCase();
}

Vue.filter('upperFilter', stringFilter)