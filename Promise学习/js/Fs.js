const fs = require('fs');

//回调函数模式
/*
fs.readFile('/Users/panguangwei/WebGithub/Promise学习/day01.txt', (err, data) => {
   if (err) throw err;
   console.log(data.toString());
});*/


//使用Promise方式
let p = new Promise((resolve, reject) => {
    fs.readFile('/Users/panguangwei/WebGithub/Promise学习/day01.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});