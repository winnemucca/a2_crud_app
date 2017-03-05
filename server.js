const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


let userRoutes = require('./server/routes/signIn');
let userDrinkRoutes = require('./server/routes/caffeineApiRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

let mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/caffeine';


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

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));



