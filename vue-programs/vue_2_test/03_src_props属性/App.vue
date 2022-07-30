<template>
    <div>
        <Student name="张三" sex="男" :age="18"/>
        <Student name="李四" sex="女" :age="19"/>
        <Student name="王五" sex="女"/>
    </div>
</template>

<script>
    // 引入组件
    import Student from "./components/Student.vue"

    export default {
        name: "App",
        components: {Student,}, 
    }
</script>
