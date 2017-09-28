var http = require('http');

var options = {
hostname:'loaclhost',
port: 3001,
path:'',
method:"POST",
};

var req = http.request(options, function(res) {
console.log('STATUS: ' + res.statusCode);
console.log('HEADERS: ' + JSON.stringify(res.headers));
res.on('data', function (chunk) {
console.log('BODY: ' + chunk);
});
});

req.on('err', function(e) {
console.log('problem with request: ' + e.message);
});

// write data to request body

req.write('data\n');
req.end();

