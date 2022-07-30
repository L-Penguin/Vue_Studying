// 该文件用于创建Vuex中最为核心的store
import Vue from "vue"
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)   // 功能：创建vm时可以使用store配置项

// 准备actions--用于响应组件中的动作
const actions = {
    /* increment: function(context, value) {
        console.log("action中increment被调用")
        context.commit("INCREMENT", value)
    },
    decrement: function(context, value) {
        console.log("action中decrement被调用")
        context.commit("DECREMENT", value)
    }, */
    incrementOdd: function(context, value) {
        console.log("action中incrementOdd被调用")
        if (context.state.sum % 2) {
            context.commit("INCREMENT", value)
        }
    },
    incrementWait: function(context, value) {
        console.log("action中incrementWait被调用")
        setTimeout(()=> {
            context.commit("INCREMENT", value)
        }, 500)
    }
}
// 准备mutations--用于操作数据（state）
const mutations = {
    INCREMENT: function(state, value) {
        console.log("mutation中INCREMENT被调用")
        state.sum += value
    },
    DECREMENT: function(state, value) {
        console.log("mutation中DECREMENT被调用")
        state.sum -= value
    },
}
// 准备state--用于存储数据
const state = {
    sum: 0, // 当前的和
}
// 准备getter--用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
