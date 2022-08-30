//Adding single page “scrolling” navigation to your site from https://codepen.io/alturnwall/pen/PomwGMY
"use strict";
const PGSECS = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  const scrollY = window.pageYOffset;
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