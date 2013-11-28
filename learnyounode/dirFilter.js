var fs = require('fs');
module.exports = function(pathName, filter, callback) {
  fs.readdir(pathName, function(err, data){
    if (err) return callback(err);
    list.forEach(function(file){
      var regex = new Regex('\\.' + filter + '$');
    });
    calback(null, filteredList);
    
    
  });

};
