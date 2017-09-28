const cp = require('child_process');
const n = cp.fork(`${__dirname}/child.js`);

n.on('message', (m) => {
    console.log('父进程收到消息：', m);
});

n.send({ hello: 'world' });