const express = require('express');
const app = express();
const connect = require('./config/database');

app.listen(3001, async () => {
    console.log('Server started at 3001');
    await connect();
    console.log('MongoDb connected');
})