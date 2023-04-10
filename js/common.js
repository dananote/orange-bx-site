// JavaScript Document


var currentNum = 0;
var wheelOn = 1;

function currentBox() {
    $('.innerBox > div:nth-child(1)').removeClass('current').eq(currentNum).addClass('current');
    $('.innerBox > div:nth-child(2)').removeClass('current').eq(currentNum).addClass('current');
    $('.innerBox > div:nth-child(3)').removeClass('current').eq(currentNum).addClass('current');
    $('.innerBox > div:nth-child(4)').removeClass('current').eq(currentNum).addClass('current');
    $('.innerBox > div:nth-child(5)').removeClass('current').eq(currentNum).addClass('current');

    // $('.innerBox > div').removeClass('current').eq(currentNum).addClass('current');

    $('#header .top_menu > li').removeClass('current').eq(currentNum).addClass('current');

    console.log(currentNum)

    if (currentNum === 0) {
        Sc01_on();



    } else if (currentNum === 1) {
        Sc01_off();

        $('#scene02 .scene02_title .main-title01 > div').addClass('active');
        $('#scene02 .scene02_title .main-title02 > div').addClass('active');
        $('#scene02 .scene02_title .main-title03 > div').addClass('active');
        $('#scene02 .box').addClass('on');
        $('#scene02 .gallary .gallary_photo').addClass('active');
        
    }else if (currentNum === 2) {

        $('#scene03 .scene03_title .main-title01 > div').addClass('active');
        $('#scene03 .scene03_title .main-title02 > div').addClass('active');
        $('#scene03 .scene03_title .main-title03 > div').addClass('active');
        $('#scene03 .box').addClass('on');

    }else if (currentNum === 3) {

    }else if (currentNum === 4) {

    }else if (currentNum === 5) {

    }
}

function Sc01_on () {
    
}

function Sc01_off () {

}


$(function () {

    $('.menu-btn-section .contents .b1').click(function () {
        var moveX = $('.scrollBox .innerBox > div').eq(0).position().left;
        $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                // preNum = currentNum;
            currentBox();
        })

    })

    $('.menu-btn-section .contents .b2').click(function () {
        var moveX = $('.scrollBox .innerBox > div').eq(1).position().left;
        $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
            // preNum = currentNum;
            currentBox();
        })

    })

    $('.menu-btn-section .contents .b3').click(function () {
        var moveX = $('.scrollBox .innerBox > div').eq(2).position().left;
        $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
            // preNum = currentNum;
            currentBox();
        })

    })

    $('.menu-btn-section .contents .b4').click(function () {
        var moveX = $('.scrollBox .innerBox > div').eq(3).position().left;
        $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
            // preNum = currentNum;
            currentBox();
        })

    })

    $('.menu-btn-section .contents .b5').click(function () {
        var moveX = $('.scrollBox .innerBox > div').eq(4).position().left;
        $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
            // preNum = currentNum;
            currentBox();
        })

    })

});







$(function () {

    $('.left_btn').click(function () {
        if (currentNum === 0) {
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).next().position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                // preNum = currentNum;
                ++currentNum;
                currentBox();
                wheelOn = 1;
            })
            
        }
    });




    $('#scene02 .sc2_prev > div').click(function () {
        if (currentNum === 1) {
            // preNum = currentNum;
            --currentNum;
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                currentBox();
                wheelOn = 0;
            })
        }
    });


    $('.left_btn').click(function () {
        if (currentNum === 1) {
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).next().position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                // preNum=currentNum;
                ++currentNum;
                currentBox();
                wheelOn = 2;
            })
        }
    });


    $('.left_btn').click(function () {
        if (currentNum === 2) {
            // preNum=currentNum
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).next().position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                ++currentNum;
                currentBox();
                wheelOn = 3;
            })

        }

    });


    $('.left_btn').click(function () {
        if (currentNum === 3) {
            // preNum=currentNum
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).next().position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                ++currentNum;
                currentBox();
                wheelOn = 4;
            })

        }
    });

    $('.left_btn').click(function () {
        if (currentNum === 4) {
            // preNum=currentNum
            --currentNum;
            var moveX = $('.scrollBox .innerBox > div').eq(currentNum).position().left;

            $('.scrollBox').stop().animate({'scrollLeft' : moveX} , 1200, 'easeInOutExpo', function () {
                currentBox();
                wheelOn = 3;
            })

        }

    });


    $('#scene03 .sc3_close > span > div').click(function(){
        console.log(window.event.target);
        $('#scene03 .bottom_bg_1').addClass('on');
        $('#scene03 .bottom_bg_2').addClass('on');
        $('#scene03 .man3').addClass('on');
        setTimeout(()=>{
            location.href='../index.html#page03';
        },600);
    });

});

//
//
// function slideDown() {
//     var moveX = $('.scrollBox .innerBox > div').eq(currentNum).next().position().left;
//
//     if (currentNum < 2) {
//         $('.scrollBox').stop().animate({'scrollLeft': moveX}, 1200, 'easeInOutExpo', function () {
//             ++currentNum;
//             currentBox();
//             wheelOn = 1;
//         });
//     } else if (currentNum === 6) {
//
//     }
// }
//
//
//
// function slideUp() {
//     var moveX = $('.scrollBox .innerBox > div').eq(currentNum).prev().position().left;
//     if (currentNum > 0) {
//         $('.scrollBox').stop().animate({'scrollLeft': moveX}, 1200, 'easeInOutExpo', function () {
//             --currentNum;
//             currentBox();
//             wheelOn = 1;
//         });
//     } else {
//         wheelOn = 1;
//     }
// }



// ================  위로 노터치  ================




$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.

    Logic();

    $("#scene02,#scene03").niceScroll({
        cursorcolor: "transparent",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });




    // =========================
    // on event section      ===

    $('#intro-section').delay(3000).queueAddClass('close');


    $(document).mousemove(function(e) {
        $('#cursor').css('top', e.pageY - 10).css('left', e.pageX - 10);
    });

    $('#scene01 .title .main-title01 > div').addClass('active');
    $('#scene01 .title .main-title02 > div').addClass('active');
    $('#scene01 .title .main-title03 > div').addClass('active');
    $('#scene01 .scene01-photo-card').addClass('on');
    $('#scene01 .photo > img').addClass('on');



    $('#header .gnb_btn').on('click',function () {
        $('.menu-btn-section').fadeIn();
        $('.menu-btn-section .menu-right-box').addClass('active');
        $('.menu-btn-section .menu-left-box').addClass('active');
        $('.menu-btn-section .menu-left-box .contents .left-box-btn').addClass('active');
    });

    $('.menu-btn-section .menu-left-box .close_btn').on('click',function () {
        $('.menu-btn-section .menu-right-box').removeClass('active');
        $('.menu-btn-section .menu-left-box').removeClass('active');
        $('.menu-btn-section .menu-left-box .contents .left-box-btn').removeClass('active');
       $('.menu-btn-section').fadeOut();
    });

// ---------------pop up----------------

    $('#scene03 .inner .character_photo .photo01 .scene03_piper .piper_photo').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box').removeClass('active');

       $('.pop-up').fadeOut();
    });


    $('#scene03 .inner .character_photo .photo02 .scene03_nicky .nicky_photo').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box2').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box2').removeClass('active');

       $('.pop-up').fadeOut();
    });

    $('#scene03 .inner .character_photo .photo03 .scene03_red .red_photo').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box3').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box3').removeClass('active');

       $('.pop-up').fadeOut();
    });

    $('#scene03 .inner .character_photo .photo04 .scene03_gloria .gloria_photo').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box4').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box4').removeClass('active');

       $('.pop-up').fadeOut();
    });

    $('#scene03 .inner .character_photo .photo05 .scene03_cindy .cindy_photo').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box5').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box5').removeClass('active');

       $('.pop-up').fadeOut();
    });




// ---------------pop up end----------------

    $('.hover_img').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.gif'));
    });
    $('.hover_img').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.gif','.png'));
    });

    $("#scene04 .scene04-slide-section").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 5000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 1200, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: true, //세로 슬라이드
        verticalSwiping: true, //세로 스와이프
        initialSlide: 2,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    $('#scene04 .scene04-slide-section')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList()
            $('#scene04 .scene04-title-wrap .scene04_title').removeClass('active');
            $('#scene04 .scene04-slide-wrap .slide-text-right').removeClass('on');

        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList()
        });

    function list01(){
        $('#scene04 .scene04-title-wrap .scene04_title.t1').addClass('active');
        $('#scene04 .scene04-slide-wrap.wrap1 .slide-text-right').addClass('on');
        $('#scene04 .text_box .bar').css('width','200px');
    }
    function list02(){
        $('#scene04 .scene04-title-wrap .scene04_title.t2').addClass('active');
        $('#scene04 .scene04-slide-wrap.wrap2 .slide-text-right').addClass('on');
        $('#scene04 .text_box .bar').css('width','400px');
    }
    function list03(){
        $('#scene04 .scene04-title-wrap .scene04_title.t3').addClass('active');
        $('#scene04 .scene04-slide-wrap.wrap3 .slide-text-right').addClass('on');
        $('#scene04 .text_box .bar').css('width','600px');
    }

    function starList(){

        if($('#slick-slide00').hasClass('slick-active')){
            list01();
        }
        if($('#slick-slide01').hasClass('slick-active')){
            list02();
        }
        if($('#slick-slide02').hasClass('slick-active')){
            list03();
        }


    }





    //==========================

});



$(document).ready(function () {

    $('#scene03').scroll(function () {
        var scrollLeft = $('#scene03').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값

        // =========================
        // scroll event section
        //==========================

        if (scrollLeft >= 50) {
            $('#scene03 .character_photo .photo01 .scene03_piper').addClass('active');
        } else {

        }

        if (scrollLeft >= 700) {
            $('#scene03 .character_photo .photo02 .scene03_nicky').addClass('active');
        } else {

        }

        if (scrollLeft >= 1500) {
            $('#scene03 .character_photo .photo03 .scene03_red').addClass('active');
        } else {

        }

        if (scrollLeft >= 2400) {
            $('#scene03 .character_photo .photo04 .scene03_gloria').addClass('active');
        } else {

        }

        if (scrollLeft >= 3300) {
            $('#scene03 .character_photo .photo05 .scene03_cindy').addClass('active');
        } else {

        }



    });


    //=====  아래로 노터치  ====================
    $('#header .top_menu > li a').click(function () {
        var idx = $(this).parent().index();

        if (idx - 1 < currentNum) {
            $('#scroll').addClass('left');
        }

        currentNum = idx;
        wheelOn = 0;

        var posX = $($(this).attr('href')).position().left;


        $('.scrollBox').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo', function () {
            currentBox();
            wheelOn = 1;
        });

        return false;
    });
    // MouseWheel
    $('.innerBox').mousewheel(function (event, delta) {

        if (wheelOn === 1) {

            if (delta < 0) {
                if (currentNum < 6) {
                    wheelOn = 0;
                } else {
                    wheelOn = 1;
                }
                slideDown();
            }
            else {
                if (currentNum > 0) {
                    wheelOn = 0;
                } else {
                    wheelOn = 1;
                }
                slideUp();
            }
        }
    });


});






