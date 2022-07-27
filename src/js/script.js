// Header / Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  console.log("burger");
});

// klik diluar Hamburger
window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    console.log("luar burger ke klik");
  }
});

// window.addEventListener("click", function (e) {
//   if (document.querySelector("#hamburger").contains(e.target)) {
//     // Clicked in box
//     console.log("sadsadsadijp");
//   } else {
//     // Clicked outside the box
//     console.log("luarrr");
//   }
// });

// Dark Mode Toggle
// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkToggle.addEventListener("click", function () {
//   if (darkToggle.checked) {
//     html.classList.add("dark");
//     localStorage.theme = "dark";
//   } else {
//     html.classList.remove("dark");
//     localStorage.theme = "light";
//   }
// });

// Pindahkan Toggle Sesuai Mode
// if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
//   darkToggle.checked = true;
// } else {
//   darkToggle.checked = false;
// }
