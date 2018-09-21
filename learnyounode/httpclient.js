(function(){
  let url = process.argv[2];
  let http = require('http');

  http.get(url, function(resp){
    resp.setEncoding("utf8");
    resp.on("data", function(data){
      console.log(data);      
    })
  });
  
})()