const aulas = ["matematica", "portugues", "ciencia", "geografia", "computacao"];

aulas.map((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
  console.log(array[index + 1]);
});

// o map retorna uma array com os resultados acumulados
