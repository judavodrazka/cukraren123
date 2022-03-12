// FIXED NAVBAR && BACK TO TOP BUTTON (BTTB)
const navBar = document.querySelector("nav");
const toTop = document.querySelector(".back-to-top-btn");
const footer = document.querySelector("footer");

// Navbar change on scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    if (
      !navBar.classList.contains("scrolled") &&
      !toTop.classList.contains("clickable")
    ) {
      navBar.classList.add("scrolled");
      toTop.classList.add("clickable");
    }
  } else {
    if (
      navBar.classList.contains("scrolled") &&
      toTop.classList.contains("clickable")
    ) {
      navBar.classList.remove("scrolled");
      toTop.classList.remove("clickable");
    }
  }
});

// BTTB change to light upon entering the footer
let buttonChangeOptions = {
  rootMargin: "-32px", // i.e. top margin of 32px which is the margin of BTTB
};

let buttonChangeObserver = new IntersectionObserver(
  (entries, buttonChangeObserver) => {
    toTop.classList.toggle("btn-in-footer");
  },
  buttonChangeOptions
);

buttonChangeObserver.observe(footer);
toTop.classList.toggle("btn-in-footer");
