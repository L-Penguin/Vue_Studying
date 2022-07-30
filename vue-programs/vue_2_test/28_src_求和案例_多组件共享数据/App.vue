<template>
    <div>
        <Count/>
        <hr/>
        <Person/>
    </div>
</template>

<script>
    import Count from './compoents/Count.vue' 
    import Person from './compoents/Person.vue' 
    export default {
        name: "App",
        components: {Count, Person},
        mounted() {
            console.log("App", this)
        },
    }
</script>

<style>
    
</style>