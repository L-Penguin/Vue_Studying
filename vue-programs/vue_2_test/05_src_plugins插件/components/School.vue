<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我执行hello方法</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "School",
        data() {
            return {
                name: "南京邮电大学",
                address: "南京",
            }
        },
        methods: {
            test() {
                this.hello()
            }
        }
    }
</script>