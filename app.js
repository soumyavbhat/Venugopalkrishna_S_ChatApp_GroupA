const express = require('express'); //include this
const app = express();
const io = require('socket.io')(); //activate chat plugin
//express -> route

// serve up static files
app.use(express.static('public'));

// add route
app.use(require('./routes/index'));

// app.get('/portfolio', (req, res)=>{
//   res.sendFile(__dirname + '/portfolio.html');
// });

const server = app.listen(3000, ()=> {
  console.log("listening on port 3000");
});

io.attach(server);


io.on('connection', socket => { //function (socket) {...}
var d = new Date();
var time = "[" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";

  console.log(time, 'a user has connected');
  io.emit('chat message', {for : 'everyone', message : `${socket.id} is here!`});

  socket.on('chat message', msg => {
    io.emit('chat message', {for : 'everyone', message : msg});
  });

  socket.on('disconnect',()=>{
    var d = new Date();
    var time = "[" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";

    console.log(time, 'a user is disconnected');
    io.emit('disconnect message',`${socket.id} has left!`);
  });
});


// app.listen(3000, ()=>{
//   console.log("listening on port 3000");
// });
