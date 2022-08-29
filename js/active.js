//Adding single page “scrolling” navigation to your site from https://codepen.io/alturnwall/pen/PomwGMY
"use strict";
const PGSECS = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
  PGSECS.forEach(current => {
    const pgSecHeight = current.offsetHeight;
    const pgSecTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    const pgSecId = current.getAttribute("id");
    if (scrollY > pgSecTop && scrollY <= pgSecTop + pgSecHeight) {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.add("w3-active-black");
    } else {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.remove("w3-active-black");
    }
  });
}
//W3.CSS Slideshow from https://www.w3schools.com/w3css/w3css_slideshow.asp
//Same code in ./slideshow.js
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {showDivs(slideIndex += n);}
function currentDiv(n) {showDivs(slideIndex = n);}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" w3-black", "");}
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-black";
}
//End of ./slideshow.js