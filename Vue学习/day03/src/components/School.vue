<template>
<!--  组件的结构-->
<div class="demo">
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
</div>
</template>

<script>
//import {Pop} from "@/mixin";
// 组件交互的逻辑
export default {
    name: 'Student',
    data(){
        return {
            name:'玉林师范学院',
            address:'玉林市'
        }
    },
   // mixins:[Pop]
}

</script>
