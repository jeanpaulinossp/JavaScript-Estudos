const carro = {
  marca: "Ford",
  ano: 2022,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));
