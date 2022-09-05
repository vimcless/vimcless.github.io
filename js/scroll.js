//Adding single page “scrolling” navigation to your site based from https://codepen.io/alturnwall/pen/PomwGMY
"use strict";
const PGSECS = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  const vertScroll = window.scrollY;
  PGSECS.forEach(function (current) {
    const pgSecHeight = current.offsetHeight;
    const pgSecTop = (current.getBoundingClientRect().top + window.scrollY);
    const pgSecId = current.getAttribute("id");
    if (vertScroll > pgSecTop && vertScroll <= pgSecTop + pgSecHeight) {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.add("pg-w3-active-black");
    } else {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.remove("pg-w3-active-black");
    }
  });
}