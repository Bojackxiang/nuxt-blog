import Vue from 'vue'

function stringFilter(inputValue) {
  
  return inputValue.toUpperCase();
}


// REVIEW 使用 filter 的时候给，使用 ‘upperFilter’ 而不是 function 的名字
Vue.filter('upperFilter', stringFilter)