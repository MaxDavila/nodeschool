var fs = require('fs');
var pathName = process.argv[2];
var regex = new RegExp('\\.' + process.argv[3] + '$');

fs.readdir(pathName, function(err, list){
  if (err) return -1;
  list.forEach(function(file){
    if (regex.test(file)) {
      console.log(file);
    }
  });
});