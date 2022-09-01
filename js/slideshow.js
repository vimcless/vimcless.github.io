//W3.CSS Slideshow based from https://www.w3schools.com/w3css/w3css_slideshow.asp
"use strict";
let slideIndex = 1, i;
const x = document.getElementsByClassName("mySlides"), dots = document.getElementsByClassName("demo");
showDivs(slideIndex);
function plusDivs(n) {showDivs(slideIndex += n);}
function currentDiv(n) {showDivs(slideIndex = n);}
function showDivs(n) {
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" w3-black", "");}
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-black";
}