function  markNaviItem()
{
  
  $(".masthead__menu-item").removeClass("links-activeItem");
  var currentUrl = $(location).attr('href');
  if (currentUrl === 'https://lucascow.github.io/' )
  {
    $(".masthead__menu-item:contains('Home')").addClass("links-activeItem");
  }
  else if(currentUrl.includes('aboutMe'))
  {
    $(".masthead__menu-item:contains('About Me')").addClass("links-activeItem");
  }
  else if(currentUrl.includes('programming'))
  {
    $(".masthead__menu-item:contains('Programming')").addClass("links-activeItem");
  }
  else if (currentUrl.includes('blog'))
  {
    $(".masthead__menu-item:contains('Blog')").addClass("links-activeItem");
  }
  
}

$( document ).ready(function() {

  markNaviItem();

});
