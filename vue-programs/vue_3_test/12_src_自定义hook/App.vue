<template>
  <button @click="isShowDemo=!isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"/>
  <hr>
  <Test v-if="isShowDemo"/>
</template>

<script>
  import Demo from './components/Demo.vue'
  import Test from './components/Test.vue'
  import {ref} from 'vue'
  export default {
    name: 'App',
    components: {Demo, Test},
    setup() {
      let isShowDemo = ref(true)
      return {
        isShowDemo
      }
    }
  }
</script>

