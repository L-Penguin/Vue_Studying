<template>
    <!-- 组件的结构 -->
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{myName}}</h2>
        <h2>学生性别：{{mySex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "Student",
        data() {
            return {
                msg: "你好，Vue",
                myAge: this.age,
                myName: this.name,
                mySex: this.sex
            }
        },
        // 简单声明接收
        props: ['name', 'sex', 'age'],

        // 接收的同时对数据进行类型限制
        /* props: {
            name: String,
            sex: String,
            age: Number
        } */

        // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制 
        /* props: {
            name: {
                type: String,   // name的类型是字符串
                required: true  // name是必要的
            },
            age: {
                type: Number,
                default: 99     // 默认值
            },
            sex: {
                type: String,
                required: true
            }
        } */
        methods: {
            updateAge() {
                this.myAge++
            }
        }
    }
</script>