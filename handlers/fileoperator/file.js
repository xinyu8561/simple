var fs=require('fs');



// fs.readdir('../views',function(err,files){
// if(err){
// 	return console.error(err);
// }
// files.forEach(function(file){
// 	console.log(file);
// })

// fs.stat('../public', function (err, stats) {
//     console.log(stats.isFile());         //true
// })
// });

// // fs.mkdir('../public/temp',function(err){
// // if(err){
// // 	return console.error(err);
// // }
// // console.log('success');
// // })

// var fs = require("fs");
// var buf = new Buffer(1024);

// console.log("准备打开已存在的文件！");
// fs.open('../a.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("准备读取文件：");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");

//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//        fs.close(fd, function(err){
//            if (err){
//                console.log(err);
//            }
//            console.log("文件关闭成功");
//        });

//    });
// });



// fs.readFile('../app.js',function(err,data){
// if(err){
// console.log('read file  err')
// }
// console.log('read fiel success')
// console.log('file is :'+ data.toString());

// })

// //var watch=fs.watch('./');
// fs.watchFile('../a.txt',function(curr,prev){
// 	console.log(`current:${curr.mtime}`);
// 	console.log("current:${prev.mtime}");
// })
//
// fs.watchFile('../a.txt', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
// console.log(`the previous mtime was: ${prev.mtime}`);
// });
// fs.watch('../a.txt', { encoding: 'buffer' }, (eventType, filename) => {
//   if (filename) {
//     console.log(filename);
//     // 输出: <Buffer ...>
//   }
// });


var fswatch=fs.watch('../a.txt');
fswatch.on('change',function(){
	console.log('change')
})