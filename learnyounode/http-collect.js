var http = require('http');
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  
  var allData = [];

  response.on('error', console.error);
  
  response.on('data', function(data){
    allData.push(data);
  });

  response.on('end', function(){
    allDataString = allData.join('');
    
    console.log(allDataString.length);
    console.log(allDataString);
  });
});


