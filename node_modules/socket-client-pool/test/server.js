const net = require('net');
const server = net.createServer((c) => {
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.on('data', (data) => {
    console.log('get data : '+ data);
    setTimeout(function() {
      try {
        c.write('hello\r\n');
      } catch(e) {
        console.log('write to client error');
      }
    }, 2000)
  })
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});