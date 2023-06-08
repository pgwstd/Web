<!--
<template>
    <div id="app">
        <h1 v-text="msg" ref="title"></h1>
        <button @click="changeMsg">点击改变标题</button>
        <MySchool/>
    </div>
</template>

<script>
import MySchool from "@/components/MySchool.vue"; //使用@代表src目录

export default {
    name: 'App',
    components: {
        MySchool
    },
    data() {
        return {
            msg: 'hello vue'
        }
    },
    methods: {
        changeMsg() {
            this.msg = 'hello world'
            console.log(this.$refs.title)
            this.$refs.title.style.color = 'red'
        }
    }
}
</script>

-->


<template>
    <div id="app">
        <MyStudent />
    </div>
</template>


<script>

import MyStudent from "@/components/MyStudent.vue";

export default ({
    components: {MyStudent}
})
</script>