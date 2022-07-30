<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="南京邮电大学">
    <template v-slot:qwe>
      <span>南京邮电大学</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo.vue'

  export default {
    name: 'App',
    components: {Demo},
    setup() {
      function showHelloMsg(value) {
        alert(`你好啊，你触发了hello事件，我收到的参数是：${value}！`)
      }
      return {
        showHelloMsg
      }
    }
  }
</script>

