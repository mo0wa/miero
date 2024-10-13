$(document).ready(function(){

        //변수 ht에 브라우저의 높이값을 저장
        var ht = $(window).height();
        //브라우저의 높이값을 section의 높이값으로 지정
        $("section").height(ht);
    
        //브라우저가 리사이즈 될 때 마다 브라우저와 section의 높이값을 갱신
        $(window).on('resize',function(){
    
            var ht = $(window).height();
            $('section').height(ht);
    
        });

        $('.popup-inner button').on('click',function(){
            $('.popup').slideUp(500);
        });

        $('.text-slider').slick({
            swipe:false,        //마우스나 손가락으로 좌우이동가능
            autoplay:true,      //자동실행
            pauseOnHover:false, //마우스호버시 계속 실행여부
            autoplaySpeed:5000, //다음장으로 넘어가는 속도
            speed:1000,         //애니메이션속도
            vertical:false,     //세로 슬라이드 여부
            fade:false,         //페이드인 페이드아웃 애니메이션 설정 여부
            arrows:false,       //좌우 화살표 표시 여부
            dots:false,         //도트 표시 여부
        });

        $('.notice-slider').slick({
            swipe:false,        //마우스나 손가락으로 좌우이동가능
            autoplay:true,      //자동실행
            pauseOnHover:false, //마우스호버시 멈춤 설정
            autoplaySpeed:5000, //다음장으로 넘어가는 속도
            speed:1000,         //애니메이션속도
            vertical:true,     //세로 슬라이드 여부
            fade:false,         //페이드인 페이드아웃 애니메이션 설정 여부
            arrows:true,       //좌우 화살표 표시 여부
            dots:false,         //도트 표시 여부
        });

        $('.proslider').slick({
            swipe:false,        //마우스나 손가락으로 좌우이동가능
            autoplay:true,      //자동실행
            pauseOnHover:false, //마우스호버시 멈춤 설정
            autoplaySpeed:5000, //다음장으로 넘어가는 속도
            speed:1000,         //애니메이션속도
            vertical:false,     //세로 슬라이드 여부
            fade:false,         //페이드인 페이드아웃 애니메이션 설정 여부
            arrows:true,       //좌우 화살표 표시 여부
            dots:false,         //도트 표시 여부
            slidesToShow:5,     //한 화면에 보여질 콘텐츠 개수
            slidesToScroll:1,   //스크롤 한번에 움직일 콘텐츠 개수
        });

});