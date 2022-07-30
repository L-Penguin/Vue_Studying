<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from "pubsub-js" 

	export default {
		name:'School',
		props: ["getSchoolName"],
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		mounted() {
			// 回调函数必须写成箭头函数，不然函数中的this为触发自定义事件的组件，使用箭头函数没有自己的this，所以往外找到mounted所属的组件
			/* this.$bus.$on("hello", (data)=> {
				console.log(data)
				alert("School组件获得"+data)
			}) */
			this.pubId = pubsub.subscribe("hello", (msgName, data)=> {
				console.log("hello", data)
			})
		},
		beforeDestroy() {
			// this.$bus.$off("hello")
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>