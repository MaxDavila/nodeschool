var fs = require('fs');

module.exports = function(pathName, filter, callback) {
  var regex = new RegExp('\\.' + filter + '$');

  fs.readdir(pathName, function(err, list){
    if (err) return callback(err);

    list = list.filter(function(file){
      return regex.test(file);
    });
    
    callback(null, list);
  });
};
