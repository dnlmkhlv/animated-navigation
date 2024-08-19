const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate in - overlay
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
    // Animate in - nav items
    navAnimation("out", "in");
  } else {
    // Animate out - overlay
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
    // Animate out - nav items
    navAnimation("in", "out");
  }
}

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav, i) => {
  nav.addEventListener("click", toggleNav);
});
