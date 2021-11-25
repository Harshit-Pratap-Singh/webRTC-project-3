var socket=io.connect();

var message=document.querySelector('#message');
var button=document.querySelector('#send');
var username=document.querySelector("#username");
var output=document.querySelector('#output');

button.addEventListener('click',()=>{
    socket.emit('sendMessage',{
        "message":message.value,
        "username":username.value,
    })
})

socket.on('broadcastMessage',data=>{
    output.innerHTML+='<p><strong>'+data.username+': </strong>'+data.message+'</p>';
})