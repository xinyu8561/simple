var startServer=function(port,cpus)
{
    var cluster = require('cluster');
    if (cluster.isMaster) {
        // Here is in master process
     //   var cpus = require('os').cpus().length;

        console.log(`Master PID: ${process.pid}, CPUs: ${cpus}`);
        // Fork workers.
        for (var i = 0; i < cpus; i++) {
            cluster.fork();
        }
    //     cluster.on('exit', (worker, code, signal) = > {
    //         console.log(`worker ${worker.process.pid} died`);
    // })
    //     ;
    } else {
        // Here is in Worker process
        console.log(`Worker PID: ${process.pid}`);
       // require('./tcpapp.js');
        //require('./udpapp.js'); //uncomment if you need a udp server
        const http = require('http');
        var app = require('../../app')
        var server = http.createServer(app).listen(port);
        require('../../routes.js')(app);


    }
}
exports.start=startServer;

