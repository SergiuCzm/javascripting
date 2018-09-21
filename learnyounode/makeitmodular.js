
var myModule = require('./makeitmodularModule');
var dir = process.argv[2];
var ext = process.argv[3];

function callback(err, data){
  if(err){console.log("erro");
  }
  data.forEach(element => {
    console.log(element);    
  });
}

myModule(dir, ext, callback);