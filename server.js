// server.js

const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(serveStatic(__dirname + '/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.options('*', cors());

app.get('/**', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);


console.log('server started ' + port);
