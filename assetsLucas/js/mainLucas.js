$( document ).ready(function() {

 $(".masthead__menu-item").each(
  function(){
    $( this ).on( "click", function() {
      $(".masthead__menu-item").removeClass("links-activeItem");
      $( this ).addClass("links-activeItem");
      console.log("masthead__menu-item:I am caleld");
      });
    }
  );
  
});
