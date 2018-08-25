
# server router
* '/'
  * GET: 메인화면	
  * POST: '/search/(위도)/(경도)'로 리다이렉트

* '/search/(위도)/(경도)'
  * GET: 파라미터로 받는 위치를 중심으로 주변의 가까운 편의점 n개를 지도에 렌더링

* '/detail/(편의점 ID)'
  * GET: 사용자가 요청한 편의점의 상품 정보 실시간 제공 


# Database (NoSQL)

1. 편의점 객체 예시

```javascript
{
    id: 1,
    lng: 37.550116,
    lat: 126.943930,
    name: 'a',
    url : "https://en.smartcity.org.tw/images/blog/Industry%20News/7-11.jpg",
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
}
```

2. 물품 객체 예시
```javascript
{
    id: 1,
    shop: 1,
    name: '오모리 김치찌게',
    stock: 4,
    rate: 3.5,
    url: "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjR8Z6dpofdAhVSUN4KHS7vBIcQjRx6BAgBEAU&url=https%3A%2F%2Fppss.kr%2Farchives%2F145580&psig=AOvVaw1YCwL5lFXpNj3glIr40oLl&ust=1535255409878677"
}
```