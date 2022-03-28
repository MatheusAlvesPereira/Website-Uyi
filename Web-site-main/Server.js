const express = require('express');
const app = express();

app.get('/Api', (req, res) => {
    return res.json([
        { user: "teste"},
        { password: "testepassword"}    
    ])
})  

app.listen('3001')