class Carro {
    constructor (marca, cor, gasRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasRestante = gasRestante;
        this.consumo = consumo;
    }
    dirigir (km) {
        let litrosConsumidos = km / this.consumo;
        this.gasRestante -= litrosConsumidos;

    }
    abastecer (litros) {
        this.gasRestante += litros;
    }
}

let carro = new Carro ("Chevrolet", "Vermelho", 57, 14);
    console.log (carro);

carro.dirigir (100);
    console.log (carro);

carro.abastecer (5);
    console.log (carro);