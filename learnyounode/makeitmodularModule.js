var fs = require('fs');
var path = require('path');

module.exports = function filterLs(dir, ext, callback){
  fs.readdir(dir, function(err, data){
    if(err) return callback(err,data);
    var filtered = data.filter(elem => path.extname(elem) == '.' + ext);
    callback(null,filtered);
  });
}