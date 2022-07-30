// 求和相关配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        INCREMENT: function(state, value) {
            console.log("mutation中INCREMENT被调用")
            state.sum += value
        },
        DECREMENT: function(state, value) {
            console.log("mutation中DECREMENT被调用")
            state.sum -= value
        },
    },
    state: {
        sum: 0, // 当前的和
        school: "南京邮电大学",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}