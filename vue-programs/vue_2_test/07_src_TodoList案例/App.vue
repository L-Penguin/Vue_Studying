<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
            <UserTop :addTodo="addTodo"/>
            <UserList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
            <UserFooter :todos="todos" :judgeAllChecked="judgeAllChecked" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入组件
    import UserTop from "./components/UserTop.vue"
    import UserList from "./components/UserList.vue"
    import UserFooter from "./components/UserFooter.vue"
    
    export default {
        name: "App",
        components: {UserTop, UserList, UserFooter},
        data() {
            return {
                todos: [
                    {id: "001", title: "打游戏", done: false},
                    {id: "002", title: "学习", done: true},
                    {id: "003", title: "吃饭", done: false},
                ]
            }
        },
        methods: {
            // 添加一个todo
            addTodo(x) {
                this.todos.unshift(x)
            },
            //勾选 或 取消 勾选一个todo
            checkTodo(id) {
                this.todos.forEach((todo)=>{
                    if (todo.id === id) {
                        todo.done = !todo.done
                    }
                })
            },
            // 删除一个todo
            deleteTodo(id) {
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            // 修改为全选或者全不选
            judgeAllChecked(judge) {
                    this.todos.forEach((todo)=>{
                        todo.done = judge
                    })
            },
            // 清除所有已经完成的todo
            clearAllTodo() {
                this.todos = this.todos.filter((todo)=>{
                    return !todo.done
                })
            }
        },
    }
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>
