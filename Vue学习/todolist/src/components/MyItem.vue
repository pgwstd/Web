<template>
    <li>
        <label>
            <input type="checkbox" />
            <span>xxxx</span>
        </label>
        <button class="btn btn-danger" style="display: none;">删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
}

</script>

<style scoped>
li{
    list-style: none;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 24px;
    text-indent: 10px;
}
li label{
    float: left;
    cursor: pointer;
}
li label input{
    margin-top: 20px;
}
li label span{
    margin-left: 10px;
}
li button{
    float: right;
    margin-top: 20px;
}
li:hover button{
    display: block;
}
li button:hover{
    color: #fff;
}
li button:focus{
    outline: none;
}
li button:active{
    outline: none;
}
li button:visited{
    outline: none;
}
li button:link{
    outline: none;
}
li button:after{
    outline: none;
}
li button:before{
    outline: none;
}
li button:target{
    outline: none;
}
li button:lang{
    outline: none;
}
li button:root{
    outline: none;
}
li button:empty{
    outline: none;
}
li button:enabled{
    outline: none;
}
li button:disabled{
    outline: none;
}
li button:checked{
    outline: none;
}
li button:default{
    outline: none;
}
</style>