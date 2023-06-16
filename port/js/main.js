$(function(){

    //header show-hide
    let currentSc = 0;
    let winSc = '';
    $(window).on('scroll',function(){
        winSc = $(document).scrollTop()
        if(winSc==0){
            $('.header').removeClass('header-on')
        }else if(winSc<250){
            $('.header').addClass('header-on')
        }else{
            $('.header').addClass('header-on')
            if(currentSc < winSc){
                $('.header').addClass('header-up')
                currentSc = $(document).scrollTop()
            }else{
                    $('.header').removeClass('header-up')
                    currentSc = $(document).scrollTop()
                }
            }
        }
    )


    //gnb
    let $about = '';
    $('.about-menu').on('click', function(){
        $about = $(this).index()
        $('html,body').animate({
            scrollTop : $('.about').offset().top
        })
    })
    let $works = '';
    $('.works-menu').on('click', function(){
        $works = $(this).index()
        $('html,body').animate({
            scrollTop : $('.works').offset().top
        })
    })
    let $contact = '';
    $('.contact-menu').on('click', function(){
        $contact = $(this).index()
        $('html,body').animate({
            scrollTop : $('#footer').offset().top
        })
    })
    let $scrtop = '';
    $('.scrtop').on('click', function(){
        $scrtop = $(this).index()
        $('html,body').animate({
            scrollTop : $('body').offset().top
        })
    })

})