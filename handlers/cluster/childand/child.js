process.on('message', (m) => {
    console.log('子进程收到消息：', m);
});

process.send({ foo: 'bar' });