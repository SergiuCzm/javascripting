(function(){
  let http = require('http')
  let map = require('through2-map')

  let server = http.createServer(function (req, res){
    req.pipe(map(function(chunk){
      return chunk.toString().toUpperCase();
    })).pipe(res);
  })
  server.listen(process.argv[2])
})()