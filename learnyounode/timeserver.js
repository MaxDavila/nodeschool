var net = require('net');
var server = net.createServer(function(socket){
  socket.end( getFormattedDate() + '\n');

});
server.listen(8000);
function getFormattedDate() {
  var date = new Date();
  return date.getFullYear() + '-' +
         addPadding(getMonth() + 1) + '-' +
         addPadding(date.getDate()) + ' ' +
         addPadding(date.getHours()) + ':' +
         addPadding(date.getMinutes());
}

function addPadding(num) {
  return (num < 10 ? '0' + num : num);
}