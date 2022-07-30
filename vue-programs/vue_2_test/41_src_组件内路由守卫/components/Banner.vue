<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="test">测试一下go</button>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            back() {
                // 路由前进
                this.$router.back()
            },
            forward() {
                // 路由后退
                this.$router.forward()
            },
            test() {
                // 路由连续前进或后退
                this.$router.go(-2)
            }
        },
    }
</script>