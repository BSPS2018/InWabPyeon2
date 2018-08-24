const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('server listening')
})

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/', (req, res) => {
    res.send(req.body.lat)
})