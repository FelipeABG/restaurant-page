import "../styles/menu.css";
import Util from "./utilities.js";

import pizza from "../img/pizza.png";
import pasta from "../img/pasta.png";

export default class {
  static render() {
    Util.clear();

    const content = document.querySelector(".content");
    content.appendChild(this.#createMenu());
  }

  static #createMenu() {
    const menu = Util.create("div", "menu");

    const tittle = Util.create("h1", "menu-tittle");
    tittle.innerText = "Menu";

    const menuMain = Util.create("div", "menu-main");
    const menuImages = Util.create("div", "menu-images");

    const pizzaContainer = Util.create("div", "pizza-container");
    pizzaContainer.appendChild(Util.createImage(pizza, "pizza-img"));
    const pizzaText = Util.create("p", "pizza-text");
    pizzaText.innerText = "Graganzola pizza";
    pizzaContainer.appendChild(pizzaText);

    const pastaContainer = Util.create("div", "pasta-container");
    pastaContainer.appendChild(Util.createImage(pasta, "pasta-img"));
    const pastaText = Util.create("p", "pasta-text");
    pastaText.innerText = "Pasta with seafood";
    pastaContainer.appendChild(pastaText);

    menuImages.appendChild(pizzaContainer);
    menuImages.appendChild(pastaContainer);

    const menuNavigation = this.#generateNav();

    menuMain.appendChild(menuImages);
    menuMain.appendChild(menuNavigation);

    menu.appendChild(tittle);
    menu.appendChild(menuMain);

    return menu;
  }

  static #generateNav() {
    const nav = Util.create("div", "menu-nav");
    const options = [
      "ITALIAN",
      "GRILLS",
      "ASIAN",
      "INDIAN",
      "COCKTAILS",
      "DESSERTS",
    ];

    options.forEach((element) => {
      const option = Util.create("button", "nav-button");
      option.innerHTML = element;
      nav.appendChild(option);
    });
    const button = Util.create("button", "book-button");
    button.innerHTML = "BOOK A TABLE";
    nav.appendChild(button);

    return nav;
  }
}
