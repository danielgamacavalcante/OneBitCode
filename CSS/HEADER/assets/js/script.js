let imgMoon = "assets/img/lua-notbg.png";
let imgSoon = "assets/img/sol-notbg.png";
const main = document.querySelector("main");
const root = document.querySelector(":root");

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    // document.querySelector('.icon').src = 'assets/img/'
  } else {
    menuMobile.classList.add("open");
    // document.querySelector('.icon').src = 'assets/img/'
  }
}

document.querySelector(".themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "light") {
    root.style.setProperty("--color-text", "#f9fafc");
    root.style.setProperty("--color-background-body", "#767680ad");
    root.style.setProperty("--color-background-header", "#3031313a");
    root.style.setProperty("--color-backgroud-button", "#0187a7");
    root.style.setProperty("--color-btn-hover", "#03bceb");
    root.style.setProperty("--color-container", "#0186a7ab");
    main.dataset.theme = "dark";
    document.querySelector("#img-model").src = imgSoon;
  } else {
    root.style.setProperty("--color-text", "#0c0b0b");
    root.style.setProperty("--color-background-body", "#f4f4f75d");
    root.style.setProperty("--color-background-header", "#3031313a");
    root.style.setProperty("--color-backgroud-button", "#0187a7");
    root.style.setProperty("--color-btn-hover", "#03bceb");
    main.dataset.theme = "light";
    document.querySelector("#img-model").src = imgMoon;
  }
});
