const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3001

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.send('HELLO WORDLSAJ')
});

app.listen(port);