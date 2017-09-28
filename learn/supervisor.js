supervisor --harmony server



npm install supervisor -g 


　　

如果你使用的是Linux 或Mac，直接键入上面的命令很可能会有权限错误。原因是npm 需要把supervisor 安装到系统目录，需要管理员授权，

可以使用 sudo npm install -g supervisor 命令来安装。    

 

假设你的Node.js程序主入口是app.js，那么只需要执行以下命令，即可开始监控文件变化。


supervisor app.js 

Supervisor还支持多种参数，列举如下：


//要监控的文件夹或js文件，默认为'.'

-w|--watch <watchItems>

  
//要忽略监控的文件夹或js文件  

-i|--ignore <ignoreItems>

 

//监控文件变化的时间间隔（周期），默认为Node.js内置的时间

-p|--poll-interval <milliseconds>

 

//要监控的文件扩展名，默认为'node|js'

-e|--extensions <extensions>

 

//要执行的主应用程序，默认为'node'

-x|--exec <executable>

 

//开启debug模式（用--debug flag来启动node）

--debug

 

//安静模式，不显示DEBUG信息

-q|--quiet 
