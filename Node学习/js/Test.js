console.log("你好宝贝");

let x = 10;
let y = 20;


//暴露x,y
module.exports.x = x;//这种好
exports.y = y;//这种只是module.exports的一个引用，不好
