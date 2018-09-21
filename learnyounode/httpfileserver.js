(function(){
  let http = require('http')
  let fs = require('fs')

  let server = http.createServer(function (req, res){
    let read = fs.createReadStream(process.argv[3])
    read.pipe(res);
  })
  server.listen(process.argv[2])
})()