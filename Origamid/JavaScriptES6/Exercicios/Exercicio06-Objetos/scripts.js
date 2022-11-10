// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto, que mostre o seu nome completo

var dadosPessoais = {
  nome: "Jean",
  sobrenome: "Paulino",
  idade: 29,
  nomeCompleto: function (nome, sobrenome) {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir: function (pessoa) {
    if (pessoa === "homem") {
      return `Latir`;
    } else {
      return `Pode passar...`;
    }
  },
};

console.log(cachorro.latir("homem"));
