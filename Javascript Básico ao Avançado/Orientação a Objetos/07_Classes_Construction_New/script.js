function cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    }
cachorro.prototype.uivar = function () {
    console.log ("Auuuuuuuuuuul")
}

let husky = new cachorro ('Husky', 4, 'Preto');

console.log (husky);

husky.uivar();