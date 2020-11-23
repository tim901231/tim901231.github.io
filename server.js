const express = require('express')
const app = express()
const port = 3000
const path = require("path")
app.get('/', (req, res) => {
  res.send("")
})

app.get('/test', (req, res) =>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/main.css', (req, res) =>{
    res.sendFile(path.join(__dirname,"main.css"))
})

app.get('/cde', (req, res) =>{
    res.send('<button>Click me to display Date and Time.</button>')
})

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, "index.js"))
})

app.get('/user/:userId', (req, res) => {
  const {userId} = req.params;
  res.send(`Your name is ${userId}`);
})

app.get('/hihihi',(req, res)=>{
  res.status(404).semd('broken')
})

app.get('/1.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, "1.jpg"))
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

