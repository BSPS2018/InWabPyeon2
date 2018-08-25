
# server router
* '/'
 - GET: 메인화면	
 - POST: '/search/(위도)/(경도)'로 리다이렉트

* '/search/(위도)/(경도)'
 - GET: 파라미터로 받는 위치를 중심으로 주변의 가까운 편의점 n개를 지도에 렌더링

* '/detail/(편의점 ID)'
 - GET: 사용자가 요청한 편의점의 상품 정보 실시간 제공 


# Database (NoSQL)
```javascript
console.log("hello world")
```
