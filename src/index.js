import HomePage from "./js/home.js";
import MenuPage from "./js/menu.js";
import AboutPage from "./js/about.js";

HomePage.render();

document.querySelector(".home-button").addEventListener("click", () => {
  HomePage.render();
});

document.querySelector(".menu-button").addEventListener("click", () => {
  MenuPage.render();
});

document.querySelector(".about-button").addEventListener("click", () => {
  AboutPage.render();
});
