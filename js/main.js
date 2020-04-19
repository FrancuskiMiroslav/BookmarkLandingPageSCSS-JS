/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
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

  // tabs
  const tabListBtn = document.querySelectorAll(".tabs__list__btn");
  const tabs = document.querySelectorAll(".tabs__container");

  tabListBtn.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabNav = tab.parentElement;
      const tabsContainer = tabNav.parentElement;
      const tabNumber = tab.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.tabs__tab[data-tab="${tabNumber}"]`);

      tabNav.querySelectorAll(".tabs__list__btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      tabsContainer.querySelectorAll(".tabs__tab").forEach((tab) => {
        tab.classList.remove("active");
      });

      tab.classList.add("active");
      tabToActivate.classList.add("active");
    });
  });

  tabs.forEach((tab) => {
    tab.querySelector(".tabs__list .tabs__list__btn").click();
  });
};
