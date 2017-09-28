var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require("fs");

http.createServer(function(req, res) {
  if (req.url === '/upload' && req.method === 'POST') {
    // 解析一个文件上传
    var form = new multiparty.Form();
   //设置编辑
   form.encoding = 'utf-8';
   //设置文件存储路径
    form.uploadDir = "uploads/images/";
  //设置单文件大小限制 
  form.maxFilesSize = 2 * 1024 * 1024;
  //form.maxFields = 1000;  设置所以文件的大小总和
  form.parse(req, function(err, fields, files) {
    // console.log(files.originalfilename);
    // console.log(files.path);
    //同步重命名文件名
   fs.renameSync(files.path,files.originalFilename);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(3001);