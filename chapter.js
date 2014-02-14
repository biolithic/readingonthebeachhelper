(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {

var hashes = window.location.href.split('/');
var chaptertitle = hashes[5] + " " + hashes[6];
$(".page-header").html(chaptertitle).css("textTransform", "capitalize");
$("h2 a").css("display", "none");

var getthepage = document.URL;
console.log(getthepage);
var anumber = getthepage.slice(-9);
console.log(anumber);

var getthepage = document.URL;
if (getthepage.indexOf("chapter") != -1)
{
var ischapter1 = getthepage.slice(-9);
if (ischapter1 == "chapter/1")
{
var n2 = 2;
jQuery('footer').prepend("<div id='stuff2' style='background:transparent; position:fixed; bottom: 72px; right: 0px; width:7%; height:65px; font-size:3em; text-align:center; text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);'><a href='" + n2 + "'>" + n2 + "</a></div>");
}
else if (ischapter1 == "chapter/18")
{
var n2 = 17;
jQuery('footer').prepend("<div id='stuff2' style='background:transparent; position:fixed; bottom: 72px; left: 0px; width:7%; height:65px; font-size:3em; text-align:center; text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);'><a href='" + n2 + "'>" + n2 + "</a></div>");
}
else
{
console.log("this is a chapter!");
var anumber = getthepage.slice(-2);
if (isNaN(anumber) == true)
{
console.log("this not a number");
var anumber = getthepage.slice(-1);  
}
console.log(anumber);
var n1 = anumber - 1;
var n2 = anumber - -1;
jQuery('footer').prepend("<div id='stuff1' style='background:transparent; position:fixed; bottom: 72px; left: 0px; width:7%; height:65px; font-size:3em; text-align:center; text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.7);'><a href='" + n1 + "'>" + n1 + "</a></div>");
jQuery('footer').prepend("<div id='stuff2' style='background:transparent; position:fixed; bottom: 72px; right: 0px; width:7%; height:65px; font-size:3em; text-align:center; text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);'><a href='" + n2 + "'>" + n2 + "</a></div>");
}
}
}
}
// $('h2 a').each(function() {
// var stuff = "<a href='" + $(this).attr('href') + "/edit' title='Edit this section'>Edit section " + $(this).text() + "</a><br />";
// $('.blockInner').append(stuff);
// });

// $("form#user-login-form div div.item-list ul li.first").css("display", "none");
// $("form#user-login-form div div.item-list ul li.last").css("display", "none");
// $("div#block-user-login.block.block-user div.blockInner a").css("display", "none");
// $('#edit-actions').append("Demo credentials<br />This user will have ability to fully read chapters one and two.<br />testuser : password");
})(jQuery);