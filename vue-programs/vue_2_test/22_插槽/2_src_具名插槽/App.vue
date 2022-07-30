<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://pic1.zhimg.com/v2-009cc4f5c0fee3880a9c60aa339a2626_r.jpg?source=1940ef5c" alt="图片">
            <a slot="footer" href="www.apple.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="www.apple.com">单机游戏</a>
                <a href="www.apple.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="https://resources.laihua.com/2021-11-24/25fb431b-4d3b-4f77-837a-c9110307c43e.mp4"></video>
            <template v-slot:footer>
                <div class="foot">
                    <a href="www.apple.com">经典</a>
                    <a href="www.apple.com">热门</a>
                    <a href="www.apple.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
            
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
    .container, .foot {
        display: flex;
        justify-content: space-around;
    }

    h4 {
        text-align: center;
    }
</style>