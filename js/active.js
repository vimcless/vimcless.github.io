// Adding single page “scrolling” navigation to your site
// From https://codepen.io/alturnwall/pen/PomwGMY

const w3divs = document.querySelectorAll("div[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  w3divs.forEach(current => {
    const w3divHeight = current.offsetHeight;
    const w3divTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    w3divId = current.getAttribute("id");
    if (
      scrollY > w3divTop &&
      scrollY <= w3divTop + w3divHeight
    ){
      document.querySelector(".w3-navigation a[href*=" + w3divId + "]").classList.add("w3-active-black");
    } else {
      document.querySelector(".w3-navigation a[href*=" + w3divId + "]").classList.remove("w3-active-black");
    }
  });
}

