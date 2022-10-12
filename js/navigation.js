// Toggel Navigation
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  // get nav status
  const visibility = nav.getAttribute("data-is-visible");

  // if the nav is closed, open it
  // if the nav is opened, close it
  if (visibility === "false") {
    nav.setAttribute("data-is-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-is-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
