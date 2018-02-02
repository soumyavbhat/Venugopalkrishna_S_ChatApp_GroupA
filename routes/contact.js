const express = require('express'); //include this
const router = express.Router();
const path = require('path');

router.get('/contact', (req, res)=>{
  res.sendFile(path.resolve(__dirname , '../views/contact.html'));
});

module.exports = router;
