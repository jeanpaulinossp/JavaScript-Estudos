class cachorro {
    constructor (raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir () {
        console.log ("Au Au");
    }
}
let labrador = new cachorro ('Labrador', 4, 'Caramelo');

cachorro.prototype.raca = 'SRD';
cachorro.prototype.cor = 'Preta';

console.log (labrador.raca);
console.log (cachorro.prototype.raca);

console.log (cachorro.prototype);
console.log (labrador);