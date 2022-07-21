//Palabras que podem ser lidar da mesma foram de trás pra frente
//arara, ana

var palavra = process.argv[2];
var palavraInvertida = "";

//console.log (palavra.length); faz a contagem de letras

/*for (var i = 0; i < palavra.length; i++) {
    palavraInvertida = palavraInvertida + palavra[i];
}*/

for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
    }
    if (palavra === palavraInvertida) {
        console.log (palavra + " É um palíndromo!");
    } else {
        console.log (palavra + " Não é um palíndromo!");
    }

