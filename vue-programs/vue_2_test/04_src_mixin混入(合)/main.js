import Vue from 'vue'
import App from './App.vue'
import {showName, equipData} from "./mixin.js" 

Vue.config.productionTip = false

Vue.mixin(showName)
Vue.mixin(equipData)

new Vue({
  el: "#app",
  render: h => h(App),
})
