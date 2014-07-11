$(document).ready(function (){
  console.log('workshops loaded');

  $('.content-box-pirate').hide();
  $('.content-box-princess').hide();
  $('.content-box-superhero').hide();

var findClick = function(){
  // var results = use this to get the id you want and return the results
  $('#princess.find-me').click(function(){
     $('.content-box-princess').fadeIn(600);
  });
  $('#pirate.find-me').click(function(){
     $('.content-box-pirate').fadeIn(600);
  });
  $('#superhero.find-me').click(function(){
     $('.content-box-superhero').fadeIn(600);
  });
}

var hideMe = function(){
  $('#close-princess.close-me').click(function(){
     $('.content-box-princess').fadeOut(600);
  });
  $('#close-pirate.close-me').click(function(){
     $('.content-box-pirate').fadeOut(600);
  });
  $('#close-superhero.close-me').click(function(){
     $('.content-box-superhero').fadeOut(600);
  });
}

findClick();
hideMe();

});