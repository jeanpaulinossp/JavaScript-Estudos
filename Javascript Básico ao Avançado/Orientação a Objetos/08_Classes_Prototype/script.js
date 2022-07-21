function cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log ("Auuuuuuuuuuuuuul");
    }
}

let husky = new cachorro ('Husky', 4, 'Preto');

console.log (husky.raca);

husky.uivar();