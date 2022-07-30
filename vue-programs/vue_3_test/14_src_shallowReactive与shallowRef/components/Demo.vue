<template>
    <h4>当前的x.y值是：{{x.y}}</h4>
    <button @click="x.y++">点我x+1</button>
    <hr>
    <h4>{{person}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age+=1">修改年龄</button>
    <button @click="job.j1.salary+=5">修改薪资</button>
</template>

<script>
    import {ref, reactive, toRefs, shallowReactive, shallowRef} from 'vue'
    export default {
        name: 'Demo',
        setup() {
            // 数据
            // let person = shallowReactive({   // 只考虑第一层数据的响应式
            let person = reactive({
                name: "张三",
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            // let x = shallowRef({ // 只处理基本数据类型响应式，不进行对象的响应式处理
            let x = ref({
                y: 0
            })

            console.log('***', x)

            // 返回一个对象（常用）
            return {
                person,
                ...toRefs(person),
                x
            }
        }
    }
</script>



