
//portfolio filter

const filters=document.querySelectorAll('.portfolio-filters li');
const portfolioItem=document.querySelectorAll('.port-item');
function portFilter(){
filters.forEach((filter)=>{
   
    filter.addEventListener('click',(e)=>{
         const activeFilter=e.target.textContent.trim();
         filters.forEach((filter)=>{
            filter.classList.remove('active');
         });
         e.target.classList.add('active');
         console.log(activeFilter)
         const defaultFilter='all';
         portfolioItem.forEach((port)=>{
            if(defaultFilter==activeFilter){
                port.style.display='block';
                return;
            }
            if(port.getAttribute('data-filter')!=activeFilter){
                port.style.display='none';
            }else{
                port.style.display='block';
            }
         });
    });
});
}
portFilter()

$(document).ready(function(){
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
   $('.main-menu li a').on('click',function(){
      console.log($($(this).attr('href')).offset().top) ; 
      $('html,body').animate({
         scrollTop:$($(this).attr('href')).offset().top-0,
      },600)         
   });

   //mobile menus
   $('.menu-icon,.main-menu ul li').on('click',function(){
      $('#menu').toggleClass('open');
      console.log('collapse new')
   });
})














