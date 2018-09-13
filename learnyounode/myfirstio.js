var fs = require('fs');
var path = process.argv[2];

var buffer = fs.readFileSync(path);
var str = buffer.toString();
str = str.split('\n');

console.log(str.length-1);