var http = require('http');
var express = require('express')
var app = express();

const PORT = 8080 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).setHeader('Content-Type', 'text/html')
    res.end(`<h1>Hello World ${process.env.MESSAGE}</h1>`)
})
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})