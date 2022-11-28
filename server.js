const express = require('express');
const path = require('path')
const app = express();
const port = "8080"

app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.send("Hello World")
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(port,()=>{
    console.log(`The server is listening on http://localhost:${port} `)
})