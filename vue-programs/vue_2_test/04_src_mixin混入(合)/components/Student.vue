<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // import {showName, equipData} from "../mixin.js"
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "Student",
        data() {
            return {
                name: "张三",
                sex: "男"
            }
        },
        // mixins: [showName, equipData]
    }
</script>