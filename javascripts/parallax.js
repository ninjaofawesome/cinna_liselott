$(document).ready(function (){

  $('button').click(function(){
    var destination = this.id.split('-')[1];
    console.log(destination);
    var offset = $("." + destination + "-box").offset().top();

    $('html, body').animate({
      scrollTop: offset
    }, 1200);

  });


});