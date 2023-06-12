<template>
    <div id="app">
        <MyHeader/>
        <MyList/>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyList from '@/components/MyList.vue'

export default {
    name: 'App',
    components: {
        MyHeader,
        MyList
    }
}
</script>

<style>

</style>
