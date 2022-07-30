<template>
  <div>
      <h2>第三方动画</h2>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <!-- transition标签可以添加属性name，添加后样式中v需要修改为属性值name -->
      <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__jello"
        leave-active-class="animate__hinge"
      >
        <h1 v-show="isShow" key="1">你好啊！</h1>  
        <!-- <h1 v-show="!isShow" key="2">Vue</h1>   -->
      </transition-group>
  </div>
</template>

<script>
    import 'animate.css'
    export default {
        name: "Test4",
        data() {
            return {
                isShow: true,
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

</style>