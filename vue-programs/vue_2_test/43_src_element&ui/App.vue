<template>
    <div>
        <button>原生的按钮</button>
        <input type="text">
        <lq-row>
            <lq-button>默认按钮</lq-button>
            <lq-button type="primary">主要按钮</lq-button>
            <lq-button type="success">成功按钮</lq-button>
            <lq-button type="info">信息按钮</lq-button>
            <lq-button type="warning">警告按钮</lq-button>
            <lq-button type="danger">危险按钮</lq-button>
        </lq-row>
        <lq-date-picker
         type="date"
         placeholder="选择日期">
        </lq-date-picker>
    </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>
