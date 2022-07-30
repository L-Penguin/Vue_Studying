<template>
    <div class="container">
        <Category title="美食">
            <img src="https://pic1.zhimg.com/v2-009cc4f5c0fee3880a9c60aa339a2626_r.jpg?source=1940ef5c" alt="图片">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g, index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="https://resources.laihua.com/2021-11-24/25fb431b-4d3b-4f77-837a-c9110307c43e.mp4"></video>
        </Category>
    </div>
</template>

<script>
    import Category from './compoents/Category.vue' 
    export default {
        name: "App",
        components: {Category},
        data() {
            return {
                foods: ["火锅", "烧烤", "披萨", "小龙虾"],
                games: ["pubg", "lol", "dota2", "cf"],
                films: ["《教父1》", "《教父2》", "《教父3》", "《功夫》"]
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
    
    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>