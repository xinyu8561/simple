/*
var express = require('express');
var app=xpressrequire('../../app')
var server = http.createServer(app);
server.listen(port);
require('../../routes.js')(app);

*/

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const cluster = require('cluster');
//路由表
var routeArr = {};
//进程列表
var workers = {};
//进程数量
var clusterNum;

var routeHandler = function(req, res) {
   
   
    console.log("处理了一个请求：");
};

/**  开启服务器并监听端口  param{port:端口号}*/
var startServer = function(port, num) {
    clusterNum = num;
    if (num) {
        startClusterSever(port, num);
    } else {
        console.log('this  is  else');
        //创建服务器  
        http.createServer(function(req, res) {
            routeHandler(req, res);
        }).listen(port); //注意这里的端口改成了变量
        //开启后在控制台显示该服务正在运行  
        console.log('Server running at http://127.0.0.1:' + port);
    }
};


//开启集群服务
var startClusterSever = function(port, numCPUs) {
    
    if (cluster.isMaster) {
        console.log('mian  work')
        for (var i = 0; i < numCPUs; i++) {
            const work = cluster.fork();
            console.log("create work :"+work.process.pid);
            workers[i] = work;
        }
 cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
     
        console.log("work:"+cluster.worker.id);
        // http.createServer((req, res) => {
        //     console.log('this  is  a request')
        //     console.log("子进程:" + cluster.worker.id + "正在处理请求...");
        //     routeHandler(req, res);
        // }).listen(port);
        var express = require('express');
var app=require('../../app')
var server = http.createServer(app).listen(port);
require('../../routes.js')(app);

    }
}

exports.start = startServer;

//start(3000,6)

/**
 * eguidRouter快速灵活的路由
 * 功能实现：
 * 1、自动静态路由解析
 * 2、支持手动设置静态路由别名
 * 3、支持创建新的静态路由实现（方便加载模板）
 * 4、动态路由解析
 * 5、自动错误响应
 * 6、使用原生API，无第三方框架
 * 7、支持cluster单机集群（机器性能压榨机）
 */