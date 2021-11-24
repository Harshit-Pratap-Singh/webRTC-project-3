var express=require('express');
var socket=require('socket.io');

var app=express();

var server=app.listen(4000,(e)=>{
    if(e) console.log(e);
    else console.log("listenning at port 4000");
})

app.use(express.static('public'))

var upgardedServer=socket(server);

upgardedServer.on('connection',(socket)=>{

    socket.on('sendMessage',(data)=>{
        upgardedServer.emit('broadcastMessage',data);
    })

    console.log("websocket connected "+ socket.id);
})

