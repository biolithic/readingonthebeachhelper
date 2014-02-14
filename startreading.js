(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {
$('h2 a').each(function() {
$(this).attr("href", "");
});

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
 