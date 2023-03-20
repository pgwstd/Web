const  str = "Hello world";

let buf = Buffer.from(str, 'utf-8');

console.log(buf);

const buf2 = Buffer.alloc(10);
buf2[0] = 88;
