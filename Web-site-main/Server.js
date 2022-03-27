const express = require('express');
const app = express();

app.get('/Api', (req, res) => {
    return res.json([
        {name : teste},
        {user: userteste}
    ])
})  

app.listen('3001')