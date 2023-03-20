const fs = require("fs");

// console.log(fs);

//打开
let fd = fs.openSync("test.txt", "w");

//写入
fs.writeSync(fd, "今天天气真不错");

//保存关闭
fs.closeSync(fd);