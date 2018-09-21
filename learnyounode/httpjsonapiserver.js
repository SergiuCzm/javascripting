(function(){
  let http = require('http')
  let url = require('url')

  let server = http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let reqUrlObj = url.parse(req.url, true)
    if(reqUrlObj.pathname === '/api/parsetime')
      res.end(JSON.stringify(getIsoTime(new Date(reqUrlObj.query.iso))))
    else if(reqUrlObj.pathname === '/api/unixtime')
      res.end(JSON.stringify(getUnixTime(new Date(reqUrlObj.query.iso))))
    else{
      res.writeHead(404)
      res.end()
    }
      
  })
  server.listen(process.argv[2])

  function getIsoTime(time){
    return {hour : time.getHours(),
      minute : time.getMinutes(),
      second : time.getSeconds()
    }
  }

  function getUnixTime(time){
    return {unixtime : time.getTime()}
  }
})()