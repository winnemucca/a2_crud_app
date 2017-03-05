const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/caffeine';
mongoose.connect(mongoUri, function (err, db) {
  if (err) {
    console.log(err);
  }
  console.log('connected!',db);
});
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



module.exports = router;