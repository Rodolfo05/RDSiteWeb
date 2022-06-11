$('.media_full').hide();

$( document ).ready(function() {

  console.log("sejecuto2")
  
    $("#navbar-placeholder").load("../index/navbar.html");

    
    $('.media_img').click(function () {
      var currImg = $(this);
      var numImage = $('#image_slider').children().length;
      var total = numImage;
      var src = $(this).attr('src');

      //window.alert(numImage);

      $('.media_full').fadeIn(500);
      $('.img_view img').attr('src', src);

      $('.carousel-control-prev-icon').on('click', function(){
        console.log("se ejcuta click por detra");
        let imagenActiva = $('.active').find('img').attr('src');
        $('.img-zoomIn').attr('src',imagenActiva);
      });

      $('.prev').off('click').click(function () {
        //   if ($(currImg).closest('li').prev().find('.media_img').length) {
        //       $(currImg).closest('li').prev().find('.media_img').trigger('click');
        //   }
        //   else{
        //       $('.media_img:last').trigger('click');
        //   }
        $('.carousel-control-prev-icon').click();

      });

      $('.next').off('click').click(function () {
        //   if ($(currImg).closest('li').next().find('.media_img').length) {
        //       $(currImg).closest('li').next().find('.media_img').trigger('click');
        //   }
        //   else{
        //       $('.media_img:first').trigger('click');
        //   }

        $('.carousel-control-next-icon').click();
        let imagenActiva = $('.active').find('img').attr('src');
        $('.img-zoomIn').attr('src',imagenActiva);
      });
  
});


    // $('.view_close').click(function () {
    //     $('.media_full').fadeOut(500);
    // });

    $('.img-zoomIn').click(function () {
        $('.media_full').fadeOut(500);
    });

});