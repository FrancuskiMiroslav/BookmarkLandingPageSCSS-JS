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

  ///// accordion
  const accordionBtn = document.querySelectorAll(".accordion__item__header");

  accordionBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // check for open accordion
      const accordionBtnOpen = document.querySelector(".accordion__item__header.open");
      if (accordionBtnOpen && accordionBtnOpen !== btn) {
        // if there is open then remove open class and set maxheight to 0
        accordionBtnOpen.classList.toggle("open");
        accordionBtnOpen.nextElementSibling.style.maxHeight = 0;
      }

      // set open class to every clicked accordion btn
      btn.classList.toggle("open");
      const accordionBody = btn.nextElementSibling;
      if (btn.classList.contains("open")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      } else {
        accordionBody.style.maxHeight = 0;
      }
    });
  });

  //// Email form validation
  const form = document.getElementById("form");
  const inputField = document.querySelector("#email");
  const error = document.getElementById("error");

  // Show input error message
  function showError(message) {
    form.className = "contact__form error";

    inputField.classList = "contact__input error";

    error.innerText = message;
    error.className = "contact__error-message error";
  }

  // Show success outline
  function showSuccess() {
    inputField.classList = "contact__input success";

    error.classList.remove("error");

    form.classList.remove("error");
  }

  // Check email is valid
  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value)) {
      showError("Whoops, make sure it's an email");
    } else {
      showSuccess();
    }
  }

  form.addEventListener("submit", (function (e) {
    e.preventDefault();

    checkEmail(email);
  }));
};
