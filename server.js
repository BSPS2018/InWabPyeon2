const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//37.549472, 126.946110
//37.552047, 126.936959
//37.550542, 126.937180

// 37.549198, 126.937770
// 37.549751, 126.943180
const shops = [
    {
        id: 1,
        lng: 37.549472,
        lat: 126.946110,
        name: 'a'
    },
    {
        id: 2,
        lng: 37.552047,
        lat: 126.936959,
        name: 'b'
    },
    {
        id: 3,
        lng: 37.550542,
        lat: 126.937180,
        name: 'c'
    },
    {
        id: 4,
        lng: 37.549198,
        lat: 126.937770,
        name: 'd'
    },
    {
        id: 5,
        lng: 37.549751,
        lat: 126.943180,
        name: 'e'
    }
]

const products = [
    {
        id: 1,
        shop: 1,
        name: '오모리 김치찌게',
        stock: 4,
        rate: 3.5
    },
    {
        id: 2,
        shop: 2,
        name: '식빵',
        stock: 4,
        rate: 5
    },
    {
        id: 3,
        shop: 1,
        name: '삼각김밥',
        stock: 4,
        rate: 3
    },
    {
        id: 4,
        shop: 4,
        name: '치킨',
        stock: 4,
        rate: 1.5
    }
]

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('server listening')
})

app.get('/', (req, res) => {
    res.render('index.ejs', { lng: 37.548243, lat: 126.942779, shops: [] })
})

app.post('/', (req, res) => {
    res.redirect('/search/' + req.body.lng + '/' + req.body.lat)
})

//37.548243, 126.942779
app.get('/search/:lng/:lat', (req, res) => {
    res.render('index.ejs', { lng: req.params.lng, lat: req.params.lat, shops: shops })
    //res.send('lng: ' + req.params.lng + ' lat: ' + req.params.lat)
})

app.get('/detail/:id', (req, res) => {
    filtered_products = products.filter(product => product.shop == req.params.id)
    res.render('detail.ejs', { products: filtered_products })
})