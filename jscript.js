$(document).ready(function () {
   //scroll up
   $(window).scroll(function () {
      if (this.scrollY > 500) {
         $(".scroll-up-btn").addClass("show");
      } else {
         $(".scroll-up-btn").removeClass("show");
      }
   });

   //toggle menu/navbar
   $(".menu-btn").click(function () {
      $(".nav-bar .ul-menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
   });

   $(".navbar .ul-menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
   });

   // carousel -- jobs
   $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            items: 3,
            nav: false,
         },
      },
   });
});
