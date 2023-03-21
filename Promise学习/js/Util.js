const util = require('util');
const fs = require('fs');
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('/Users/panguangwei/WebGithub/Promise学习/test.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});

