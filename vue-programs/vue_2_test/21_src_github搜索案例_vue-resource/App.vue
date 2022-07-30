<template>
    <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
    import Search from './compoents/Search.vue'
    import List from './compoents/List.vue'
    export default {
        name: "App",
        components: {Search, List},
    }
</script>