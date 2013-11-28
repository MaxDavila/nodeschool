var dirFilter = require('./dir-filter');

dirFilter(process.argv[2], process.argv[3], function(err, list){
  if (err) return console.error(err);

  list.forEach(function(filename){
    console.log(filename);
  });
});