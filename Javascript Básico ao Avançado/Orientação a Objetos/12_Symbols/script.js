class cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

let patas = Symbol();
cachorro.prototype [patas] = 4;

console.log (cachorro.prototype[patas]);