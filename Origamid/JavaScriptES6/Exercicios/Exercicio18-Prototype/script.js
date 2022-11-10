// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.RetornaNomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const jean = new Pessoa("Jean", "Paulino", 29);

console.log(jean.RetornaNomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(HTMLAllCollection.prototype);
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
console.log(li.constructor.name);
console.log(Object.getOwnPropertyNames(HTMLLIElement.prototype));
li.click; // Function
console.log(li.click.constructor.name);
li.innerText; // String
console.log(li.innerText.constructor.name);
li.value; // Number
console.log(li.value.constructor.name);
li.hidden; // Boolean
console.log(li.hidden.constructor.name);
li.offsetLeft; // Number
console.log(li.offsetLeft.constructor.name);
li.click(); // undefined
console.log(li.click());

// Qual o construtor do dado abaixo:
console.log(typeof li.hidden.constructor.name); // string
