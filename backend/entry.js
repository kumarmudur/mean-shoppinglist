const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

const route = require('./route//routes');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/shopinglist');

//on connection
mongoose.connection.on('connected', () => {
    console.log('mangodb connected at port 27017');
});

//on connection error
mongoose.connection.on('err', (err) => {
    console.log(err);
});

const PORT = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('Mahadeva Shiva');
});

app.listen(PORT, () => {
    console.log('server has been started at port: ' + PORT);
});

