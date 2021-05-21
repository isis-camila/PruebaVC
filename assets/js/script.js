$(document).ready(function(){

    $("a").click(function(evento){
        event.preventDefault

        var gato= this.hash;
        $("html").animate({
            scrollTop: $(gato).offset().top
    }, 900
    );
  }) 

  $('.oculto1').on("click",function(){
    $('.card-text').toggle();
  });

    $('h3').on("dblclick",function(){
        $(this).css("color", "blue");
  });
  
  $('[data-toggle="tooltip"]').tooltip();

 
})