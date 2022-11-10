// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    console.log(nome + " andou");
  };
}

const newPerson = new Pessoa("Jean", 29);
console.log(newPerson);
console.log(newPerson.andar());

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const newPerson2 = new Pessoa("João", 20);
const newPerson3 = new Pessoa("Maria", 25);
const newPerson4 = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);

  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
