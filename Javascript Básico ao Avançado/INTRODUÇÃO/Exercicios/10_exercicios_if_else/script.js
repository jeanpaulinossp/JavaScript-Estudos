let velocidade = prompt ("Digite a velocidade que você passou no radar!");

if (velocidade >= "81" && velocidade < "86") {
    console.log ("Fique atento, você só não foi multado devido a tolerância de 7% dos radares!");
}
else if (velocidade <= "80") {
    console.log ("Fique tranquilo, você passou dentro da velocidade permitida!");
}
else {
    console.log ("Você foi multado, procure a delegacia mais próxima para mais informações!");
}