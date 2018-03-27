let Client = require('../index.js');

let pool = Client.Pool({host: '127.0.0.1', port:8124, min: 2, max: 5});


let count = 1;
//conn上注册data事件， 基于具体的协议处理数据， 之后将连接释放。
pool.getConnection(function(conn) {
  conn.write('hello pool ' + count);
  conn.on('data', function(chunk) {
    console.log('client get response: ' + chunk);
    pool.releaseConnection(conn);
  });
  count++;
})
