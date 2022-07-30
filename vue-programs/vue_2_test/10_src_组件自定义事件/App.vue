<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
		<Student @atguigu="getStudentName" @demo="m1"/>
		<!-- <Student @atguigu.once="getStudentName"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref)灵活可以设置延迟 -->
		<!-- <Student ref="student"/> -->

		<!-- click会被视作自定义事件，如果指定为原生事件，需添加.native -->
		<!-- <Student @click="show"/> -->
		<Student @click.native="show"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg: "你好啊！",
				studentName: null
			}
		},
		methods: {
			getSchoolName(name) {
				console.log("App收到了学校名：", name)
			},
			getStudentName(name, ...params) {
				this.studentName = name
				console.log("App收到了学生姓名：", name, params)
			},
			m1() {
				console.log("demo事件被触发了")
			},
			show() {
				alert(123)
			}
		},
		mounted() {
			// 第二种绑定事件
			// this.$refs.student.$on("atguigu", this.getStudentName)
			
			/* setTimeout(()=> {
				// 给子组件延迟2s绑定自定义事件
				// this.$refs.student.$on("atguigu", this.getStudentName)
				// 只触发一次
				// this.$refs.student.$once("atguigu", this.getStudentName)
			}, 2000) */
			/* this.$refs.student.$on("atguigu", function(name, ...params) {
				this.studentName = name
				console.log("App收到了学生姓名：", name, params)
				console.log(this)	// 由于使用普通函数，函数内的this为Student组件实例（在Student组件中触发）
			}) */
			/* this.$refs.student.$on("atguigu", (name, ...params)=> {
				this.studentName = name
				console.log("App收到了学生姓名：", name, params)
				console.log(this)	// 由于使用箭头函数，没有自己的this，往外找，找到外面的APP组件实例
			}) */
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
