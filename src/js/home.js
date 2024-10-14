import "../styles/home.css";

import Util from "./utilities.js";

import drinkImg from "../img/cocktail.png";
import foodImg from "../img/food.png";
import desertImg from "../img/desert.png";
import placeBig from "../img/place-big.png";
import placeSmall from "../img/place-small.png";

export default class {
  static render() {
    Util.clear();
    const content = document.querySelector(".content");

    const main = this.#makeMain();
    const place = this.#makePlace();

    content.appendChild(main);
    content.appendChild(place);
  }

  static #makeMain() {
    const main = Util.create("div", "main");

    const right = Util.create("div", "right-main");

    const top = Util.create("div", "right-top");
    const topLeft = Util.create("div", "top-left");
    topLeft.appendChild(Util.createImage(foodImg, "food-img"));

    const topRight = Util.create("div", "top-right");

    const title = Util.create("h2", "top-tittle");
    title.innerText = "Some Restaurant Experience";
    const text = Util.create("p", "top-text");
    text.innerText = "Exquisite dishes and impeccable service";
    const button = Util.create("button", "top-button");
    button.innerHTML = "SEE MENU";

    topRight.appendChild(title);
    topRight.appendChild(text);
    topRight.appendChild(button);

    top.appendChild(topLeft);
    top.appendChild(topRight);

    const bottom = Util.create("div", "right-bottom");
    bottom.appendChild(Util.createImage(drinkImg, "drink-img"));

    right.appendChild(top);
    right.appendChild(bottom);

    const left = Util.create("div", "left-main");
    left.appendChild(Util.createImage(desertImg, "desert-img"));

    main.appendChild(left);
    main.appendChild(right);

    return main;
  }

  static #makePlace() {
    const place = Util.create("div", "place");

    const textDiv = Util.create("div", "place-text-container");
    const tittle = Util.create("h1", "place-tittle");
    tittle.innerText = "Place";
    const text = Util.create("p", "place-text");
    text.innerHTML =
      "<strong>Some Restaurant</strong>, located in the city center, offers its guests a wide selection of dishes and drinks. The interior is designed in a modern style, with elements of luxury. Here you can hold a bussiness meeting, a romantic evening or just enjoy a delicious meal.";
    const button = Util.create("button", "place-button");
    button.innerHTML = "LEARN MORE";

    textDiv.appendChild(tittle);
    textDiv.appendChild(text);
    textDiv.appendChild(button);

    const images = Util.create("div", "place-images");
    images.appendChild(Util.createImage(placeBig, "place-big-img"));
    images.appendChild(Util.createImage(placeSmall, "place-small-img"));

    place.appendChild(textDiv);
    place.appendChild(images);

    return place;
  }
}
