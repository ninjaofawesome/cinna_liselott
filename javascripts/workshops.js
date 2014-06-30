  $(document).ready(function (){
    console.log('workshops loaded');

    $('.content-box-pirate').hide();
    $('.content-box-princess').hide();
    $('.content-box-superhero').hide();


    $('#pirate').click(function(){
      console.log('pirate');
      $('.content-box-pirate').fadeIn(600);

    });

    $('#princess').click(function(){
      console.log('princess');
      $('.content-box-princess').fadeIn(600);
    });

    $('#superhero').click(function(){
      console.log('superhero');
      $('.content-box-superhero').fadeIn(600);
    });

  });