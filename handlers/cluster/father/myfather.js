var cp = require('child_process');

var child = cp.fork(__dirname+'/mychild.js');
var i=0;


child.send(1);

child.on('message', function(m) {
    console.log('father:\n\n\n\n\n\n\n\n\n\n\n\n')
    run(m);
});



var run =function(m) {
    i = (m + 1000);

    child.send(m);
}
