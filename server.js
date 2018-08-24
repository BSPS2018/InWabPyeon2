const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('server listening')
})

app.get('/', (req, res) => {
    res.render('index.ejs', { lng: 37.548243, lat: 126.942779 })
})
//37.548243, 126.942779
app.get('/:lng/:lat', (req, res) => {
    res.render('index.ejs', { lng: req.params.lng, lat: req.params.lat })
    //res.send('lng: ' + req.params.lng + ' lat: ' + req.params.lat)
})

app.post('/', (req, res) => {
    res.redirect('/' + req.body.lng + '/' + req.body.lat)
})