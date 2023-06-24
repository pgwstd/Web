<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" >
    </div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
    name: 'MyHeader',
    methods:{
        add(e){
            const todoObj = {
                id: nanoid(),
                title: e.target.value,
                done: false
            }
        }
    }
}

</script>


<style>
.todo-header input {
    width: 100%;
    height: 64px;
    font-size: 24px;
    text-indent: 10px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
}

.todo-header input:focus {
    background-color: #e1e1e1;
}
</style>