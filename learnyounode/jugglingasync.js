(function(){
  let http = require('http');
  let cs = require('concat-stream');
  let requests = 3;
  let result = [];

  function getFromUrl(index){
    http.get(process.argv[2+index], function(resp){
      resp.setEncoding("utf8");
        resp.pipe(cs(function (data){
          result[index] = data;
          requests--;
          if(requests == 0){
            for (var i = 0; i < 3; i++){
              console.log(result[i])
            }
          }
        }));
    });
  }

  getFromUrl(0);
  getFromUrl(1);
  getFromUrl(2);
  
})()