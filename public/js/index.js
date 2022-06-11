$(document).ready(function(){

  $("#navbar-placeholder").load("pages/index/navbar.html");
    //cambiaCarouselAutom();
  $("#modals-proyectos").load("pages/proyectos/modalProyectos.html");
    
});



$('a[href^="#"]').on('click', function(event) {
    console.log("object");
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });


function cambiaCarouselAutom(){
  setInterval(function(){
    $(".carousel-control-next-icon").click();
    }, 3000);
  
}

function cambiarImagenModal(){
  $("#imgModal").prop("src", "images/pc.png");
  
}