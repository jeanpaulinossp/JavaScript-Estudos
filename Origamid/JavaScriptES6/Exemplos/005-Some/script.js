const frutas = ["Banana", "Pera", "Uva"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});

console.log(temUva);

// verifica dentro das condições passadas se alguma delas retorna true
