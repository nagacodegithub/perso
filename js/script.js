/*---------------------------------------------------------------

    Template Name: Bestbook - Ebook Landing HTML Template
    Template URL: [demo url]
    Description: This is a landing page for E-book made with bootstrap 5
    Author: Digitshack
    Author URL: https://themeforest.net/user/digitshack
    Version: 1.0

-----------------------------------------------------------------

    JS INDEX
    ==================

    1. Preloader
    2. Type Words
    3. Portfolio Filter
    4. Testimonial Slider
    5. Navigation Menus
----------------------------------------------------------------*/


$(document).ready(function(){

/*================================= 
* 1. Preloader
==================================*/

var preloader = $('.preloader');
setTimeout(function(){
    preloader.css('opacity','0');
   setTimeout(function(){
      preloader.hide();
   },1000)
},700)

/*================================= 
* 2. Type Words
==================================*/
   new Typed({
      element:'#about-typeword',
      typeSpeed:120,
      backSpeed:60,
      typeDelay:3000
   });
   new Typed({
      element:'#profile-typeword',
      typeSpeed:120,
      backSpeed:60,
      typeDelay:3000
   });

/*================================= 
* 3. Portfolio Filter
==================================*/
const filters=$('.portfolio-filters li');
const portfolioItem=$('.port-item');
function portFilter(){
filters.each((i,filter)=>{
    $(filter).on('click',(e)=>{
         const activeFilter=e.target.textContent.trim();
         filters.each((i,filter)=>{
            $(filter).removeClass('active');
         });
         e.target.classList.add('active');
         const defaultFilter='all';
         portfolioItem.each((i,port)=>{
            if(defaultFilter==activeFilter){
                $(port).show();
                return;
            }
            if( $(port).attr('data-filter')!=activeFilter){
               $(port).hide();
            }else{
               $(port).show();
            }
         });
    });
});
}
portFilter();
/*================================= 
* 4. Testimonial Slider
==================================*/
   var owl = $(".owl-carousel");
   owl.owlCarousel({
     items: 2,
     margin: 10,
     autoplay:true,
     autoplayTimeout:3000,
     smartSpeed: 1200,
     responsiveClass: true,
     responsiveClass: true,
     loop: true,
     dots:true,
     stagePadding:5,
     responsive: {
       0: {
         items: 1
       },
   
       600: {
         items: 1
       },
       768: {
         items: 2
       },
       1024: {
         items: 3
       },
   
       1366: {
         items: 2
       }
     }
   });

/*================================= 
* 5. Navigation Menus
==================================*/
   $('.main-menu li a').on('click',function(){
      $('.main-menu li a').removeClass('active')
      $(this).addClass('active');
      $('html,body').animate({
         scrollTop:$($(this).attr('href')).offset().top,
      },600)         
   });
   $('.menu-icon,.main-menu ul li').on('click',function(){
      $('#menu').toggleClass('open');
   });

})














