const express = require('express'); //include this
const router = express.Router();
const path = require('path');

router.get('/portfolio', (req, res)=>{
  res.sendFile(path.resolve(__dirname , '../views/portfolio.html'));
});

module.exports = router;
