const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false,
  },
});

console.log(moto);

// get e set

const carro = {};

Object.defineProperties(carro, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

console.log(carro);
