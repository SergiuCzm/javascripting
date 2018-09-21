(function(){
  let net = require('net')

  let server = net.createServer(function (socket){
    console.log('connected');
    let d = new Date();
    let str = ('' + d.getFullYear()
    +'-'+ ('0' + (d.getMonth()+1)).slice(-2)
    +'-'+ ('0' + d.getDate()).slice(-2)
    +' '+ ('0' + d.getHours()).slice(-2)
    +':'+ ('0' + d.getMinutes()).slice(-2) +'\n');

    socket.end(str);
  })
  server.listen(Number(process.argv[2]));
  
})()