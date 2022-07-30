<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games" msg="hello">我是默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ["listData", "title"],
        data() {
            return {
                games: ["pubg", "lol", "dota2", "cf"],
            }
        }
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px
    }

    h3 {
        text-align: center;
        background-color: orange;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>