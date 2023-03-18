const express = require('express');

const app = express();

app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// 设置响应头，允许跨域
    res.send('Hello Ajax GET');// 响应数据
});

app.get('/json-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// 设置响应头，允许跨域
    res.setHeader('Access-Control-Allow-Headers', '*');// 设置响应头，允许跨域
    const data = {
        name: 'panguangwei-2'
    }
    let str = JSON.stringify(data);
    res.send(str);// 响应数据
});

app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// 设置响应头，允许跨域
    res.setHeader('Access-Control-Allow-Headers', '*');// 设置响应头，允许跨域
    setTimeout(()=>{
        console.log("发送数据");
    },3000);
});

app.post('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// 设置响应头，允许跨域
    res.send('Hello Ajax POST');// 响应数据
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});