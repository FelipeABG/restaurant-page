export default class {
  static clear() {
    const content = document.querySelector(".content");
    content.innerHTML = "";
  }

  static create(elementName, className) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
  }

  static createImage(image, className) {
    const img = document.createElement("img");
    img.src = image;
    img.classList.add(className);
    return img;
  }
}
