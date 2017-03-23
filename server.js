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
const userSelectedDrinkRoute = require('./server/routes/userDrinkRoute');
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


/* GET api listing. */
app.use('/api', api);

app.use('/users', users);

app.use('/caffeineDrinks', userDrinkRoutes);

app.use('/userCaffeineList', userSelectedDrinkRoute);


// ******* need to study up on following response.send ***********
// app.get('/',(req, res) => {
//     res.send('invalid endpoint');
// })


// app.get('*', req, res => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'))
// })

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));



