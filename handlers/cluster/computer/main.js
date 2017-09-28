// const computecluster = require('compute-cluster');
//
// // 分配计算集群
// var cc = new computecluster({ module: './work.js' });
//
// // 并行运行工作
// cc.enqueue({ input: 35 }, function (error, result) {
//   console.log("35：", result);
// });
// cc.enqueue({ input: 40 }, function (error, result) {
//   console.log("40：", result);
// });



var cp = require('child_process');

var child = cp.fork('./work.js');

child.send('asd');
