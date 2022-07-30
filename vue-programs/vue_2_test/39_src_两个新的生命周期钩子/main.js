// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'


// 引入插件 可以使用this.$http.get(url).then(response=>{},error=>{})
// import vueResource from 'vue-resource'
//引入store
// import store from './store'

// import Vuex from 'vuex'

Vue.config.productionTip = false
// 使用插件
// Vue.use(vueResource)

// Vue.use(Vuex)

Vue.use(VueRouter)

new Vue({
  el: "#app",
  render: h => h(App),
  router: router

  // store,
  /* beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  } */

  // template: `<App></App>`,
  // components:{App},
})
