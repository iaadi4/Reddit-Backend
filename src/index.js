const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportAuth = require('./config/jwt-middleware');

const connect = require('./config/database');
const apiRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('Server started at 3000');
    await connect();
    console.log('MongoDb connected');
})