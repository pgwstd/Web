<template>
<!--  组件的结构-->
<div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>地址:{{address}}</h2>
</div>
</template>


<script>
// 组件交互的逻辑
export default {
    name: 'MyStudent',
    data(){
        return {
            msg:'学生信息如下:',
            name:'张三',
            age:19
        }
    },
    //接收父组件传递过来的数据
    //props:['address']   //简单接收数据

    /*props:{
        address:String, //接收字符串类型的数据
    }*/

    //接收多个数据
    props:{
        address:{
            type:String,
            default:'北京市'   //设置默认值
        }
    }
}

</script>
