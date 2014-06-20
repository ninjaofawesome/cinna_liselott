// $(document).ready(function(){
//   console.log('hello parallax-o!');

//   var scroller=0;

//   $('#about').click(function(){
//       scroller=scroller+550;
//       $('.about-box').animate({
//         scrollTop: scroller
//       });

//   });

// });

  $(document).ready(function (){

    $("#about").click(function (){
      $('html, body').animate({
          scrollTop: $("#about-box").offset().top
      }, 1200);
    });
  });