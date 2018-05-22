const express = require('express')
const bodyParser = require('body-parser')
const datasource = require('../config/datasource')


const app = express()
app.datasource = datasource(app)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app