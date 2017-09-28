var cp = require('child_process');

var child = cp.fork(__dirname+'/child.js');

child.on('message', function(m) {
    process.stdout.write('this is child thread')
    process.stdout.write(m.result.toString());
});

(function fiboLoop () {
    child.send({v:40});
    process.nextTick(fiboLoop);
})();


(function spinForever () {
    process.stdout.write(".");
    process.nextTick(spinForever);
})();
