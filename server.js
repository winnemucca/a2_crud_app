const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const config = require('./config/database');;

const app = express();

const api = require('./server/routes/api');
const users = require('./server/routes/signIn');
const userDrinkRoutes = require('./server/routes/caffeineApiRoute');

// moved database configuration to seperate file
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('connected to database' +config.database)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

let mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/caffeine';


// mongoose.connect(mongoUri, function (err, db) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('connected!',db);
// });
/* GET api listing. */
app.use('/api', api);

app.use('/users', users);

// **   todo ****
// ************************* 
app.use('/caffeineDrinks', userDrinkRoutes);

// ********************** fix above in morning *****//

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));



