const specialFruit = ['Banana', 'Laranja', 'Maçã', 'Uva', 'Manga'];

const additionalItens = ['Leite condensado', 'Leite em pó', 'Calda de Limão'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFruta = [...fruit, ...additional];

  return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));