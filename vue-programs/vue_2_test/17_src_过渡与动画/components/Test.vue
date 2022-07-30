<template>
  <div>
      <h2>动画效果</h2>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <!-- transition标签可以添加属性name，添加后样式中v需要修改为属性值name -->
      <transition :appear="true">
        <h1 v-show="isShow">你好啊！</h1>  
      </transition>
  </div>
</template>

<script>
    export default {
        name: "Test",
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

    .v-enter-active {
        animation: action 1s linear;
    }

    .v-leave-active {
        animation: action 1s reverse;
    }

    @keyframes action {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>