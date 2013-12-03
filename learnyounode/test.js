var requestify = require('requestify');

requestify.get('http://newvo.herokuapp.com/posts.json')
  .then(function(response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      var resulst = response.getBody().map(function(post, index){
        return index;
      });
  console.log(resulst)
  }
);