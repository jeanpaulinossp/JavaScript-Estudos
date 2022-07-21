function numAleatorio (num) {
    return Math.floor(Math.random () * num) +1; //a função Math.floor arrendona os números
}
    console.log (numAleatorio(10)); //o numero aleatório sempre será menor que o 10