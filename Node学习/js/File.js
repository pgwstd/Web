//同步文件写入
const fs = require("fs");

// console.log(fs);

/*
//打开
let fd = fs.openSync("day01.txt", "w");

//写入
fs.writeSync(fd, "今天天气真不错");

//保存关闭
fs.closeSync(fd);*/


//异步文件写入
/*
fs.open("test2.txt", "w", function (err, fd) {
    if (!err) {
        fs.write(fd, "今天出去玩", function (err) {
            if (!err) {
                console.log("写入成功");
            }
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("保存成功");
                }
            });

        });
    } else {
        console.log(err);
    }
});*/

//普通文件写入
/*fs.writeFile("test3.txt", "这是我的普通写入", {flag: "a"}, function (err) {
    if (!err) {
        console.log("写入成功了");
    } else {
        console.log(err);
    }
});*/


//流式文件写入
/*let ws = fs.createWriteStream("test4.txt",{flags:"w"});

//可以通过监听流的open和close事件来监听流的打开和关闭
ws.once("open",() => {
    console.log("打开成功了");
});

ws.once("close",() => {
    console.log("关闭成功了");
});

ws.write("通过可写流进行写入");

//关闭流
ws.end();*/

//简单文件读取
/*
fs.readFile("test4.txt", (err, data) => {
    if (!err){
        // console.log(data);
        //写到另外下个文件(复制)
        fs.writeFile("test5.txt",data, (err) => {
            if (!err){
                console.log("文件写入成功");
            }
        });
    }
});*/

//流式文件读取
//创建可读流
let rs = fs.createWriteStream("test3.txt");

//创建可写流
let ws = fs.createWriteStream("test3.txt");

//监听流开启和关闭
rs.once("open",() => {
    console.log("可读流打开了");
});

rs.once("close",() => {
    console.log("可读流关闭了");
    ws.end();
});

rs.on("data", (data) => {
    // console.log(data);
    ws.write(data);
});

