// бургер Меню
let menuBut = document.querySelector(".checkbox");
let menuAll = document.querySelector(".navbar");

menuBut.onclick = function () {
  menuAll.classList.toggle("nav__margin");
  menuAll.classList.toggle("nav__margin--transform");
};
// тумблер темы
let tumbler = document.querySelector(".switch-btn");
let body = document.querySelector(".white");

tumbler.onclick = function () {
  tumbler.classList.toggle("switch-on");
  body.classList.toggle("dark");
  document
    .querySelectorAll(".line")
    .forEach((elem) => elem.classList.toggle("line--white"));
  document
    .querySelectorAll(".menu__a")
    .forEach((elem) => elem.classList.toggle("a__white"));
  document
    .querySelectorAll(".projects__img")
    .forEach((elem) => elem.classList.toggle("footer__novisible"));
};
