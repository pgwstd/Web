// let md = require("./Test");
let math = require("./Math");
const {mul} = require("./Math");

/*
console.log(md.x);
console.log(md.y);*/

let sum = math.add(100, 88);
let product = math.mul(20,30);

console.log("sum=" +sum);
//使用字符串模板
console.log(`product=${product}`);