(function(){
  let http = require('http');
  let cs = require('concat-stream');
  let url = process.argv[2];
 
  http.get(url, function(resp){
    resp.setEncoding("utf8");
      resp.pipe(cs(function (data){
        console.log(data.length)
        console.log(data)
      }));    
  });
  
})()