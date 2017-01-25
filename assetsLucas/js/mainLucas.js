function  markNaviItem()
{
  
  var currentUrl = $(location).attr('href');
  if (currentUrl === 'https://lucascow.github.io/' )
  {
    $(".masthead__menu-item:contains('Home')").addClass("links-activeItem");
  }
  else if(currentUrl.includes('technology'))
  {
    $(".masthead__menu-item:contains('Technology')").addClass("links-activeItem");
  }
  else if (currentUrl.includes('news'))
  {
    $(".masthead__menu-item:contains('News')").addClass("links-activeItem");
  }
  else if (currentUrl.includes('page-archive'))
  {
    $(".masthead__menu-item:contains('All Pages')").addClass("links-activeItem");
  }
  else if (currentUrl.includes('sample-only-year-archive'))
  {
    $(".masthead__menu-item:contains('All Sample Posts')").addClass("links-activeItem");
  }
  
}

$( document ).ready(function() {

  markNaviItem();

});
