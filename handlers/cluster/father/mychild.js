process.on('message',function (m) {


run(m)
})

var run=function (m) {
    var y=m;
    for(var i=m;m<(m+100000000);m++){
        process.stdout.write("."+m);
    }
    if(m===y){
        process.send(m);
    }

}