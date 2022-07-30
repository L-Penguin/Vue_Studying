export const showName = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log("欢迎来到此页面！")
    }
}

export const equipData = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}