let carros = ["Gol", "Palio", "Uno", "Sandero"];

//let carro = carros.pop();
//let carro = carros.push ("Vectra");
//let carro = carros.shift ();
//let carro = carros.unshift ("Vectra");
//delete carros [0];

/*carros.splice (2, 0, "Vectra", "Astra", "Cruze");
//1° elemento: a partir de qual indice irá começar a add
//2° elemento: quantos indices do array ira remover
//3° elemento: adiciona os novos elementos*/

//let carrosAntigos = ["Brasilia", "Monza", "Fusca"];
//let todosCarros = carros.concat (carrosAntigos);


let novoArray = carros.slice(1,3);
//1° elemento: onde irá iniciar o novo array
//2° elemento: onde irá parar o novo array

console.log (novoArray);