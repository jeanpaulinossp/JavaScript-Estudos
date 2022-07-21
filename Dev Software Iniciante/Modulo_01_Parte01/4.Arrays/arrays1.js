let carros = ["Gol", "Palio", "Uno"];

console.log (carros);

let primeiroCarro = carros [0];
let segundaCarro = carros [1];
let terceiroCarro = carros [2];

console.log (primeiroCarro);
console.log (segundaCarro);
console.log (terceiroCarro);

carros [2] = "Argo";
terceiroCarro = carros [2];

console.log (terceiroCarro)

console.log (carros.length);
console.log (carros [carros.length - 1]); // lenght - 1 nos transmite o ultimo elento

carros [3] = "Sandero"; // adicionando um novo dado no array

let quartoCarro = carros [3];

console.log (quartoCarro);

carros [carros.length] = "Honda Fit"; // substituindo o ultimo elemento
console.log (carros [carros.length - 1]);

carros.push ("Polo");
quintoCarro = carros [4];
console.log (quintoCarro);

