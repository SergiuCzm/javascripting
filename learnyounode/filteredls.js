var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, callback2);

/* Using string manipulation */
function callback(err, data){
  data.forEach(element => {
    if(element.indexOf('.') > -1)
      if(element.substring(element.indexOf('.'), element.length) === ext)
        console.log(element);
  });
}

/* Using path module */
function callback2(err, data){
  if(err) return console.error(err);
  data.forEach(element =>{
    if(path.extname(element) === ext){console.log(element)}
  });
}