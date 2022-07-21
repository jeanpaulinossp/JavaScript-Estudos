let carros = ["BMW","Audi","VW","Fiat","Chevrolet"];

console.log (carros);

let removerPrimeiroCarro = carros.shift (); //remove um elemento no começo do array

console.log (removerPrimeiroCarro);
console.log (carros);

let adicionarPrimeiroCarro = carros.unshift ("Renault"); // add um elemento no começo do array

console.log (adicionarPrimeiroCarro);
console.log (carros);

console.log ("A Marca favorita do mês de Abril é: " + carros[0]);