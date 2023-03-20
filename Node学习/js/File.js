const fs = require("fs");

// console.log(fs);

/*
//打开
let fd = fs.openSync("test.txt", "w");

//写入
fs.writeSync(fd, "今天天气真不错");

//保存关闭
fs.closeSync(fd);*/


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


fs.writeFile("test3.txt", "这是我的普通写入", {flag: "a"}, function (err) {
    if (!err) {
        console.log("写入成功了");
    } else {
        console.log(err);
    }
});


