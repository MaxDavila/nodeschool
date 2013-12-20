var map = require('through');
var tr = map(write, end);
tr.write('yo\n');
tr.end();

function write(buf) { console.log(this); }
function end() { console.log('__END__');}