<template>
<!--  组件的结构-->
<div class="demo">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="showName">点击显示学校名</button>
</div>
</template>


<script>
// 组件交互的逻辑
export default {
    name: 'MySchool',
    data(){
        return {
            name:'清华大学',
            address:'北京市海淀区'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
}

</script>

<style>
/*组件的样式*/
.demo{
    width: 300px;
    height: 300px;
    background-color: #a0ff00;
}

</style>