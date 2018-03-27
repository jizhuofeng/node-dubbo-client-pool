根据网上的一些思路实现socket连接池。


使用：
    
    npm install socket-client-pool

    let Client = require('socket-client-pool');
    let pool = Client.Pool({host: '127.0.0.1', port:8124, min: 2, max: 5});
    //conn上注册data事件， 基于具体的协议处理数据， 之后将连接释放。
    //从连接池中获取链接
    pool.getConnection(function(conn) {
      conn.write('hello pool ');
      conn.on('data', function(chunk) {
        console.log('client get response: ' + chunk);
        //释放链接
        pool.releaseConnection(conn);
      });
    })


Pool参数说明：

    host: server host
    port: server port
    min: 最小连接数，默认1
    max: 最大连接数，默认10。
    timeout: 初始化链接超时时间（单位s）。
