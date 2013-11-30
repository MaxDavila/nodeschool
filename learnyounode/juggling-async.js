var http = require('http');
var urls = process.argv.slice(2,5);
var results = ['', '', ''];
var count = 0;

urls.forEach(getResults);

function getResults(url, index){
  http.get(url, function(response){
    response.setEncoding('utf8');

    response.on('error', console.error);

    response.on('data',function(data){
      results[index] += data;
    });

    response.on('end', function() {
      count++;
      if (count == 3) printResults();
    });

  });
}

function printResults() {
  console.log(results.join('\n'));
}