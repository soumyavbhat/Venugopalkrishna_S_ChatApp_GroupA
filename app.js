const express = require('express'); //include this
const app = express();

//express -> route
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));
//
// app.get('/portfolio', (req, res)=>{
//   res.sendFile(__dirname + '/portfolio.html');
// });


app.listen(3000, ()=>{
  console.log("listening on port 3000");
});
