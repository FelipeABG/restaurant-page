import foodImg from "./img/food.png";
import drinkImg from "./img/cocktail.png";
import dessertImg from "./img/desert.png";

export default class {
  static render() {
    const content = document.querySelector(".content");

    const main = this.#generateMain();

    content.appendChild(main);
  }

  static #generateMain() {
    const main = this.#create("div", "main");

    main.appendChild(this.#generateLeftSide());
    main.appendChild(this.#generateRightSide());

    return main;
  }

  static #generateLeftSide() {
    const dessert = this.#createImage(dessertImg, "dessert-img");

    return dessert;
  }

  static #generateRightSide() {
    const main = this.#create("div", "right-main");

    const top = this.#create("div", "right-main-top");
    top.appendChild(this.#createImage(foodImg, "food-img"));

    main.appendChild(top);
    main.appendChild(this.#createImage(drinkImg, "drink-img"));

    return main;
  }

  static #generatePages() {}

  static #create(elementName, className) {
    const div = document.createElement(elementName);
    div.classList.add(className);
    return div;
  }

  static #createImage(image, className) {
    const img = document.createElement("img");
    img.classList.add(className);
    return img;
  }
}
