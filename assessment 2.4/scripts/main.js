$(document).ready(function(){
    $('.header').height($(window).height());
    $('.carousel-item').height($(window).height());
    $('.carousel').width($(header).width());
})


var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.getElementById("content");
src.appendChild(img);
