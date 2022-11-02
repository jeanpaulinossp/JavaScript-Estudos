const aulas = ["matematica", "portugues", "ciencia", "geografia", "computacao"];

aulas.map((item, index, array) => {
  console.log(array[index + 1]);
});
