const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

// --------------------------------------------------------------------------------------------- //

// uso real do Call

function Dom(seletor) {
  // essa função esta atribuindo ao this.element o objeto selecionado
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const li = { element: document.querySelector("li") };

Dom.prototype.ativo.call(li, "ativar");

// --------------------------------------------------------------------------------------------- //

// Call => Array Like

const lista = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(lista, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro);
