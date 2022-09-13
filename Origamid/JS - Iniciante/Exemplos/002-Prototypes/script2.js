const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");
console.log(lista);

listaArray = Array.prototype.slice.call(lista); // transforma a nodelist em uma array
listaArray2 = Array.from(lista); // funciona da mesma forma que o método acima
console.log(listaArray);
console.log(listaArray2);

console.log(Object.getOwnPropertyNames(Array));

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return false;
  },
};
// quando é acessado um elemento dentro da função, ele é definido como sendo uma array, number ou boolean e por isso é possível acessar todas as funções pré-definidas para eles.
console.log(Carro.marca.toUpperCase);
