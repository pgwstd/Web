<template>
<!--  组件的结构-->
<div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
</div>
</template>


<script>
// 组件交互的逻辑
export default {
    name: 'MyStudent',
    data(){
        return {
            name:'张三',
            age:19
        }
    }
}

</script>
