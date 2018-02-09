const express = require('express'); //include this
const app = express();
const io = require('socket.io')(); //activate chat plugin
//express -> route

// serve up static files
app.use(express.static('public'));

// add route
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

// app.get('/portfolio', (req, res)=>{
//   res.sendFile(__dirname + '/portfolio.html');
// });

const server = app.listen(3000, ()=> {
  console.log("listening on port 3000");
});

io.attach(server);

io.on('connection', socket => { //function (socket) {...}
  console.log('a user has connected');
  io.emit('chat message', {for : 'everyone', message : `${socket.id} is here!`});

  socket.on('chat message', msg => {
    io.emit('chat message', {for : 'everyone', message : msg});
  });

  socket.on('disconnect',()=>{
    console.log('a user is disconnected');
    io.emit('disconnect message',`${socket.id} has left!`);
  });
});


// app.listen(3000, ()=>{
//   console.log("listening on port 3000");
// });
