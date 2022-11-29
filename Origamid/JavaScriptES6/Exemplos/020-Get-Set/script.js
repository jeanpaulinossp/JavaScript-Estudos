const button = {
  get tamanho() {
    return this._numero;
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  },
};

// somente com o método get não é permitido alteração do objeto
// quando colocado o método set, é permitido a alteração através dele

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "Banana";
frutas.nova = "Morango";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button("Comprar", "blue");
