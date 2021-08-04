// Certificate Slider 
jQuery(document).ready(function($){
    let slider = $('.owl-carousel');
    slider.each(function () {
      $(this).owlCarousel({
        nav: true,
        loop:false,
        dots: false,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 50,
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          767:{
            items: 3,
            stagePadding: 25,
          },
          1000:{
            items: 3,
          }
        }
      });
    });
  });

  // Go Top 
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      document.getElementById("gotop").style.visibility='visible' ; 
    } else {
      document.getElementById("gotop").style.visibility="hidden";
    }
  });


  /* Nav Bar */ 
var blue_color ="#2aa9df", light_color ="#f7f7f7";
window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
    progress_div();
  };

 

function progress_div() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('mynav').style.backgroundColor="rgba(11, 12,17, 0.45)" ;
      document.getElementById("mynav").style.boxShadow = "1px 0px 5px 0px rgba(0,0,0,0.3)";
      document.getElementById("mynav").style.height = "70px";
      document.getElementById("progress-container").style.display="block";
     
    } else {
      document.getElementById("mynav").style.boxShadow = "0px 0px 0px 0px black";
      document.getElementById("mynav").style.height = "80px";
      document.getElementById("mynav").style.backgroundColor = "transparent";
      document.getElementById("progress-container").style.display="none";
  
    }
  }
 