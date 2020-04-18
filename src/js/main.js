window.onload = function () {
  // scroll sticky nav
  const header = document.getElementById("sticky");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // hamburger button toggle
  const navBtn = document.getElementById("menu-btn");
  const logo = document.getElementById("main-logo");
  const nav = document.getElementById("nav");

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
    logo.classList.toggle("main-logo");
    header.classList.toggle("overlay");
    nav.classList.toggle("showing");
  });
};
