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
        name: 'a',
        services: {
            delivery: 0,
            public: 1,
            findChild: 1,
            laundry: 1,
            usedPhone: 0,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 2,
        lng: 37.552047,
        lat: 126.936959,
        name: 'b',
        services: {
            delivery: 1,
            public: 0,
            findChild: 1,
            laundry: 1,
            usedPhone: 0,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 3,
        lng: 37.550542,
        lat: 126.937180,
        name: 'c',
        services: {
            delivery: 0,
            public: 0,
            findChild: 1,
            laundry: 1,
            usedPhone: 1,
            document: 1,
            print: 1,
            flight: 0
        }
    },
    {
        id: 4,
        lng: 37.549198,
        lat: 126.937770,
        name: 'd',
        services: {
            delivery: 1,
            public: 1,
            findChild: 1,
            laundry: 0,
            usedPhone: 1,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 0,
        lng: 37.549751,
        lat: 126.943180,
        name: 'e',
        services: {
            delivery: 0,
            public: 0,
            findChild: 0,
            laundry: 0,
            usedPhone: 1,
            document: 1,
            print: 0,
            flight: 1
        }
    }
]

const products = [
    {
        id: 1,
        shop: 1,
        name: '오모리 김치찌게',
        stock: 4,
        rate: 3.5,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 2,
        shop: 2,
        name: '식빵',
        stock: 4,
        rate: 5,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '삼각김밥',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 4,
        shop: 4,
        name: '치킨',
        stock: 4,
        rate: 1.5,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '팝콘',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '핫도그',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '불닭',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '족발',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '피자',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '음료수',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '그냥김밥',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '오각김밥',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
    },
    {
        id: 3,
        shop: 1,
        name: '육각김밥',
        stock: 4,
        rate: 3,
        url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
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
    currShop = shops.filter(shop => shop.id == req.params.id)
    res.render('detail.ejs', { products: filtered_products, shop: currShop[0] })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})