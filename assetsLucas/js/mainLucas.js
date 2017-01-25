function  markNaviItem()
{
  
  var currentUrl = $(location).attr('href');
  if (currentUrl === 'https://lucascow.github.io/' )
  {
    $(".masthead__menu-item:contains('Home')").addClass("links-activeItem");
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
