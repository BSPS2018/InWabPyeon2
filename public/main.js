var coords = [[37.550052, 126.948596], [37.548874, 126.937134], [37.550958, 126.940911]];
var marker = [];

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.548185, 126.944841),
    zoom: 10
});

for (var i = 0; i < coords.length; i++) {
    marker[i] = new naver.maps.Marker({
        position: new naver.maps.LatLng(coords[i][0], coords[i][1]),
        map: map
    });
}

var j = 0;

for (var i = 0; i < marker.length; i++) {
    naver.maps.Event.addListener(marker[i], 'click', function (e) {
        console.log('marker' + j);
        j++;
        location.href = "http://www.naver.com";
    });
}
/*
        naver.maps.Event.addListener(marker[0], 'click', function (e) {
            console.log('marker' + 0);
        });

        naver.maps.Event.addListener(marker[1], 'click', function (e) {
            console.log('marker' + 1);
        });

        naver.maps.Event.addListener(marker[2], 'click', function (e) {
            console.log('marker' + 2);
        });*/
        /*
        var marker1 = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595704, 127.105399),
            map: map
        });

        var marker2 = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595904, 127.108309),
            map: map
        });

        naver.maps.Event.addListener(marker1, 'click', function (e) {
            alert('marker1');
        });

        naver.maps.Event.addListener(marker2, 'click', function (e) {
            alert('marker2');
        });
        */