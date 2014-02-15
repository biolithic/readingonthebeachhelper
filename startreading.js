(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {

// for each chapter title, we don't want the user to click the chapter title
    $('h2 a').each(function() {
      $(this).attr("href", "");
      });

// when the user clicks on a book cover, take them to the table of contents of that book
    var myArray = [];
    $("a[title='open this book']").each(function() {
    myArray.push($(this).attr("href"));
      });

    var i = 0;
    $("img").each(function( index ) {
    var imagedomnumber = index;
    $(this).bind ("click", function(){
      location.replace(myArray[imagedomnumber]);
      });
    });

}
}
})(jQuery);
 