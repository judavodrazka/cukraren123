const map = document.querySelector("iframe");

function mapFullscreen() {
  map.requestFullscreen();
}

// FIXED NAVBAR
const navBar = document.querySelector("nav");
const toTop = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navBar.classList.add("scrolled");
    toTop.classList.add("clickable");
  } else {
    navBar.classList.remove("scrolled");
    toTop.classList.remove("clickable");
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1400) {
    if (!toTop.classList.contains("btn-in-footer")) {
      toTop.classList.add("btn-in-footer");
    }
  } else {
    if (toTop.classList.contains("btn-in-footer")) {
      toTop.classList.remove("btn-in-footer");
    }
  }
});
