<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name: "About",
        beforeDestroy() {
            console.log("About组件即将被销毁！")
        },
        mounted() {
            console.log("About组件挂载完毕")
        },
        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log("进入About组件")
            console.log("About--beforeRoyteEnter", to, from)
            if (to.meta.isAuth) {   // 判断是否需要鉴权
                if (localStorage.getItem('school') === "南京邮电大学") {
                    next()
                } else {
                    alert("学校名不对，无权限查看")
                }
            } else {
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log("About--beforeRoyteLeave", to, from)
            next()
            
        }
    }
</script>
