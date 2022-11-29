// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueButton = new Button({
//   backgroudColor: "blue",
//   text: "Comprar",
//   color: "white",
// });

// console.log(blueButton.options.backgroudColor);

class Button {
  constructor(text, backgroud, color) {
    this.text = text;
    this.backgroud = backgroud;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.backgroud;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton("Entrar");

console.log(botaoAzul);
