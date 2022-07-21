//TESTE FOR

/*var carros = ["Gol", "Palio", "Uno", "Celta"];

for (var i = 0; i < carros.length; i++) {
    console.log (carros[i]);
}

for (var i = carros.length - 1; i >= 0; i--) {
    console.log (carros[i]);
}

var i = 0;

//TESTE WHILE
while ( i < carros.length) {
    console.log (carros[i]);
    i++;
}

//TESTE WHILE COM CONDIÇÃO IF E BREAK
while (i < carros.length) {
    console.log (carros[i]);
    if (carros[i] === "Palio") {
        console.log ("Encontrei o Palio");
        break;
    }
    i++;
}*/

//TESTE EHILE COM CONDIÇÃO IF E CONTINUE
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < numeros.length) {
    let num = numeros[i];
    i++;

    if (num % 2 === 0) {
        console.log (num + " É par!");
        continue;
    }else {
        console.log (num + " É Impar!");
    }
    
}