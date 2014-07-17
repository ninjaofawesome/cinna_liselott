  $(document).ready(function (){

// $('button').click(function(){
//     if($('.btn').parent('#home-box')){
//       $('html, body').animate({
//         if('#about'){
//           scrollTop: $("#about-box").offset().top
//         }
//         if('#about'){
//           scrollTop: $("#about-box").offset().top
//         }

// }

// });

  // $(function() {
  //   $('a[href*=#]:not([href=#])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         $('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });


//this works but not what I want, WIP.
    $("#about").click(function (){
      $('html, body').animate({
          scrollTop: $("#about-box").offset().top
      }, 1000);
    });

    $("#workshop").click(function (){
      $('html, body').animate({
          scrollTop: $("#workshop-box").offset().top
      }, 1400);
    });


    $("#aboutHome").click(function (){
      $('html, body').animate({
          scrollTop: $(".home").offset().top
      }, 1000);
    });


    $("#aboutWorkshop").click(function (){
      $('html, body').animate({
          scrollTop: $("#workshop-box").offset().top
      }, 1000);
    });

    $("#workshopHome").click(function (){
      $('html, body').animate({
          scrollTop: $(".home").offset().top
      }, 1400);
    });

    $("#workshopAbout").click(function (){
      $('html, body').animate({
          scrollTop: $(".about-box").offset().top
      }, 1000);
    });



  });