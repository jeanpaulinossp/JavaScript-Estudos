// a função quando é recriada ela vai completa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// quando uma função é criada através do prototype, ela existe na função, porém só é acessada e executada quando for chamada.
Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

const jean = new Pessoa("Jean", 29);

console.log(Pessoa.prototype); // retorna um objeto
console.log(jean.prototype); // retorna undefined
console.log(jean.andar); // executa a função
console.log(Pessoa.prototype.andar()); // retorna undefined do this.nome e a executa a função
