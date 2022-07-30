<template>
  <div>
      <h2>多个元素过渡</h2>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <!-- transition标签可以添加属性name，添加后样式中v需要修改为属性值name -->
      <transition-group :appear="true" name="hello">
        <h1 v-show="isShow" key="1">你好啊！</h1>  
        <h1 v-show="!isShow" key="2">Vue</h1>  
      </transition-group>
  </div>
</template>

<script>
    export default {
        name: "Test3",
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
        /* transition: 0.5s linear; */
    }

    /* 进入的起点、离开的终点 */
    .hello-enter,  .hello-leave-to {
        transform: translateX(-100%);
    }

    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }

    /* 进入的终点、离开的起点 */
    .hello-enter-to, .hello-leave {
        transform: translateX(0);
    }

</style>