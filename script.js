const header = document.querySelector(".header");

window.onscroll = function () {
  if (this.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach((headerLink, index) => {
  headerLink.addEventListener("click", function () {
    this.classList.add("active");
    headerLinks.forEach((removeClassHeaderLink, removeIndex) => {
      if (index !== removeIndex) {
        removeClassHeaderLink.classList.remove("active");
      }
    });
  });
});

window.addEventListener("scroll", function () {
  if (this.scrollY <= 300) {
    headerLinks.forEach(function (headerLink) {
      headerLink.classList.remove("active");
    });
  }
});

const headerBurger = document.querySelector(".header__burger");
const headerList = document.querySelector(".header__list");

headerBurger.addEventListener("click", function () {
  headerBurger.classList.toggle("active");
  if (headerBurger.classList.contains("active")) {
    headerList.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    headerList.classList.remove("active");
    document.body.style = "";
  }
});

// При нажатии на пункт меню, закрываеться меню и перебрасывает на секцию

headerLinks.forEach((headerLink, index) => {
  headerLink.addEventListener("click", function () {
    if (headerBurger.classList.contains("active")) {
      headerBurger.classList.remove("active");
      headerList.classList.remove("active");
      document.body.style = "";
    }
  });
});
