// $(document).ready(function(){

//     //header show-hide
//     let currentSc = 0;
//     let winSc = '';
//     $(window).on('scroll',function(){
//         winSc = $(document).scrollTop()
//         if(winSc==0){
//             $('.header').removeClass('header-on')
//         }else{
//             $('.header').addClass('header-on')
//             if(currentSc < winSc){
//                 $('.header').addClass('header-up')
//                 currentSc = $(document).scrollTop()
//             }else{
//                     $('.header').removeClass('header-up')
//                     currentSc = $(document).scrollTop()
//                 }
//             }
//         }
//     )

//     //gnb
//     $('.gnb .depth1').on('mouseenter' , function(){
//         $(this).find('ul').show()
//     })
//     $('.gnb .depth1').on('mouseleave' , function(){
//         $(this).find('ul').hide()
//     })

//     //allmenu
//     $('.allmenu-btn').click(function(){
//         $('.allmenu-wrap').toggleClass('on')
//         $('.allmenu-btn').toggleClass('on')
//     })

//     //allmenu-depth2  
//     $('.allmenu-gnb .depth1').click(function(){
//         $('.allmenu-gnb .depth1 ul').stop().slideUp(200)
//         $(this).find('ul').stop().slideToggle(200)

//         $(this).siblings().children('a').removeClass('on')
//         $(this).children('a').toggleClass('on')
        
//     })

// })