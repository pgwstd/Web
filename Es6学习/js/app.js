//入口文件

//模块引入
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
import * as m3 from "./m3.js";

/*console.log(m1);
console.log(m2);
console.log(m3);*/

m1.teach();
m2.findJob();
m3.default.teach();

//修改背景颜色
import $ from 'jquery';
// $('body').css('background','red');
$(window).on('load', function() {
    // your code goes here
    $('body').css('background', 'pink');
});



