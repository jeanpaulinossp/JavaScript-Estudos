let idade = prompt ("Digite a sua idade");
let cnh = prompt ("Você possui CNH? Responda 'SIM/NÃO' ") 

if (idade >= "18" && cnh == "SIM") {
    console.log ("Parabéns, você esta apto a conduzir veículos automotores!");
}
else if (idade >= "18" && cnh == "NÃO" ) {
    console.log ("Notamos que você não é habilitado ainda mas já tem idade, não quer aproveitar nossa promoção e tirar sua carta?");
}
else {
    console.log (`Infelizmente você ainda tem somente ${idade} anos e ainda não pode ter habilitação, mas não desanime... Sua hora vai chegar!`);
}