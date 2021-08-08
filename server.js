'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./errorhandler/404');
const errorHandler = require('./errorhandler/500');

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('Welcome to Home page')
});

app.post('/bad', (req,res)=> {
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route ');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "Osama Momani",
       email: "momaniosama97@gmail.com"
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}