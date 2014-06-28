  $(document).ready(function (){

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

  });