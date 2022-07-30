// 该文件用于创建Vuex中最为核心的store
import Vue from "vue"
// 引入Vuex
import Vuex from 'vuex'
import countOption from './count'
import personOption from './person'

// 应用Vuex插件
Vue.use(Vuex)   // 功能：创建vm时可以使用store配置项


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOption,
        personAbout: personOption,
    }
})
