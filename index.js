const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.render('Hello Word')
})

app.listen(3000)