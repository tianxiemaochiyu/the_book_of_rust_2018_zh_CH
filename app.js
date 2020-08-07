const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.listen(3000)