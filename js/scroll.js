//Adding single page “scrolling” navigation to your site based from https://codepen.io/alturnwall/pen/PomwGMY
"use strict";
const PGSECS = document.querySelectorAll("section[id]");
let vertScroll, pgSecHeight, pgSecTop, pgSecId;
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  vertScroll = window.scrollY;
  PGSECS.forEach(current => {
    pgSecHeight = current.offsetHeight;
    pgSecTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
    pgSecId = current.getAttribute("id");
    if (vertScroll > pgSecTop && vertScroll <= pgSecTop + pgSecHeight) {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.add("w3-active-black");
    } else {
      document.querySelector(`.w3-navigation a[href*=${pgSecId}]`).classList.remove("w3-active-black");
    }
  });
}