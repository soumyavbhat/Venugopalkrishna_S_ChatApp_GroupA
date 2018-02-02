const express = require('express'); //include this
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname , '../views/index.html'));
});

module.exports = router;
