import "../styles/home.css";

import drinkImg from "../img/cocktail.png";
import foodImg from "../img/food.png";
import desertImg from "../img/desert.png";
import placeBig from "../img/place-big.png";
import placeSmall from "../img/place-small.png";

export default class {
  static render() {
    const content = document.querySelector(".content");

    const main = this.#makeMain();
    const place = this.#makePlace();

    content.appendChild(main);
    content.appendChild(place);
  }

  static #makeMain() {
    const main = this.#create("div", "main");

    const right = this.#create("div", "right-main");

    const top = this.#create("div", "right-top");
    const topLeft = this.#create("div", "top-left");
    topLeft.appendChild(this.#createImage(foodImg, "food-img"));

    const topRight = this.#create("div", "top-right");

    const title = this.#create("h2", "top-tittle");
    title.innerText = "Some Restaurant Experience";
    const text = this.#create("p", "top-text");
    text.innerText = "Exquisite dishes and impeccable service";
    const button = this.#create("button", "top-button");
    button.innerHTML = "SEE MENU";

    topRight.appendChild(title);
    topRight.appendChild(text);
    topRight.appendChild(button);

    top.appendChild(topLeft);
    top.appendChild(topRight);

    const bottom = this.#create("div", "right-bottom");
    bottom.appendChild(this.#createImage(drinkImg, "drink-img"));

    right.appendChild(top);
    right.appendChild(bottom);

    const left = this.#create("div", "left-main");
    left.appendChild(this.#createImage(desertImg, "desert-img"));

    main.appendChild(left);
    main.appendChild(right);

    return main;
  }

  static #makePlace() {
    const place = this.#create("div", "place");

    const textDiv = this.#create("div", "place-text-container");
    const tittle = this.#create("h1", "place-tittle");
    tittle.innerText = "Place";
    const text = this.#create("p", "place-text");
    text.innerHTML =
      "<strong>Some Restaurant</strong>, located in the city center, offers its guests a wide selection of dishes and drinks. The interior is designed in a modern style, with elements of luxury. Here you can hold a bussiness meeting, a romantic evening or just enjoy a delicious meal.";
    const button = this.#create("button", "place-button");
    button.innerHTML = "LEARN MORE";

    textDiv.appendChild(tittle);
    textDiv.appendChild(text);
    textDiv.appendChild(button);

    const images = this.#create("div", "place-images");
    images.appendChild(this.#createImage(placeBig, "place-big-img"));
    images.appendChild(this.#createImage(placeSmall, "place-small-img"));

    place.appendChild(textDiv);
    place.appendChild(images);

    return place;
  }

  static #create(elementName, className) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
  }

  static #createImage(image, className) {
    const img = document.createElement("img");
    img.src = image;
    img.classList.add(className);
    return img;
  }
}
