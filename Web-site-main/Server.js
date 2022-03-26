const express = require('express');
const app = express();

app.get('/Api', (req, res) => {
    return res.json({message: 'okay'})
})  

app.listen('3001')