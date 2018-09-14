var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf8', callback);
var str;


function callback(err, data){
  str = data.split('\n');
  console.log(str.length-1);
}