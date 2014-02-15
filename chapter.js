(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {

    
    //javascript and css nice-to-haves on the chapter pages of your e-book
    // this code is only loaded on the chapter pages of your site
    var hashes = window.location.href.split('/');
    var chaptertitle = hashes[5] + " " + hashes[6];
    $(".page-header").html(chaptertitle).css("textTransform", "capitalize");
    $("h2 a").css("display", "none");

    // show the previous and next chapter links
    var getthepage = document.URL;
    var anumber = getthepage.slice(-9);
    if (getthepage.indexOf("chapter") != -1)
    {
      var ischapter1 = getthepage.slice(-9);
      if (ischapter1 == "chapter/1")
      {
        var n2 = 2;
        jQuery('footer').prepend("<div class='nextchapter' ><a href='" + n2 + "'>" + n2 + "</a></div>");
      }
      else if (ischapter1 == "chapter/25")
      {
        var n2 = 1;
        jQuery('footer').prepend("<div class='previouschapter'><a href='" + n2 + "'>" + n2 + "</a></div>");
      }
      else
      {
        var anumber = getthepage.slice(-2);
        if (isNaN(anumber) == true)
        {
          var anumber = getthepage.slice(-1);  
        }
        var n1 = anumber - 1;
        var n2 = anumber - -1;
        jQuery('footer').prepend("<div class='previouschapter'><a href='" + n1 + "'>" + n1 + "</a></div>");
        jQuery('footer').prepend("<div class='nextchapter'><a href='" + n2 + "'>" + n2 + "</a></div>");
      }
      }
  }
}

})(jQuery);