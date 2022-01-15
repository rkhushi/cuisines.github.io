// Code By Webdevtrick ( https://webdevtrick.com )
var bg1 = "#e4541",
 bg2 = "#facc39";

$(window).on("scroll touchmove", function() {
 if ($(document).scrollTop() >= $("#bg1").position().top) {
 $('body').css('background', $("#bg1").attr("data-color"));
 
 };
 if ($(document).scrollTop() > $("#bg2").position().top) {
 $('body').css('background', $("#bg`2").attr("data-color"))
 };
});