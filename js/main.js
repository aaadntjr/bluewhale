$(document).ready(function(){
    
    $(document).scroll(function(){
        var top = $(this).scrollTop();
        
        if(top > 50) {
            $(".graph_var").addClass("graph_var_active");
        }
    });/*scroll*/
    
    /*a 클릭하면 거기로 가기*/
    $("a").click(function(){
        $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
        }, 500);
        return false;
    });
    
    
    //지도지도
    var home = new naver.maps.LatLng(36.357144, 127.451906);
    var mapOptions = {
        center: home,
        zoom: 10,
    };
    
    var map = new naver.maps.Map('map', mapOptions);
    
    //map.panBy(new naver.maps.Point(700, -130));
    
    marker = new naver.maps.Marker({
        map: map,
        position: home
    });

    
    
});/*레디펑션*/
