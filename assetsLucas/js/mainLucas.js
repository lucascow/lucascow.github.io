function  markNaviItem()
{
  var currentUrl = $(location).attr('href');
  if(currentUrl.includes('technology'))
  {
    $(".masthead__menu-item:contains('Technology')").addClass("links-activeItem");
  }
  else if (currentUrl.includes('news'))
  {
    $(".masthead__menu-item:contains('News')").addClass("links-activeItem");
  }
  else if (currentUrl === 'https://lucascow.github.io/' )
  {
    $(".masthead__menu-item:contains('Home')").addClass("links-activeItem");
  }
}

$( document ).ready(function() {

  markNaviItem();

});
