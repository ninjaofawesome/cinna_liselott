$(document).ready(function (){
  console.log('workshops loaded');

  $('.content-box-pirate').hide();
  $('.content-box-princess').hide();
  $('.content-box-superhero').hide();


  $('#princessparty').click(function(){
      console.log("princess");
     $('.content-box-princess').fadeIn(600);
  });
  $('#pirateparty').click(function(){
     $('.content-box-pirate').fadeIn(600);
  });
  $('#superheroparty').click(function(){
     $('.content-box-superhero').fadeIn(600);
  });


  $('#close-princess.close-me').click(function(){
     $('.content-box-princess').fadeOut(600);
  });
  $('#close-pirate.close-me').click(function(){
     $('.content-box-pirate').fadeOut(600);
  });
  $('#close-superhero.close-me').click(function(){
     $('.content-box-superhero').fadeOut(600);
  });


});