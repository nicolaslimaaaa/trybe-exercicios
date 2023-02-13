// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Some todos os valores contidos no array e imprima o resultado;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];

  media = soma / numbers.length;
}

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

console.log(numbers);
console.log(soma);
console.log(media);

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  } 
}
console.log(maiorNumero);

let amountOfOddNumbres = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    amountOfOddNumbres += 1;
  }

  if (amountOfOddNumbres === 0) {
    console.log("nenhum valor ímpar encontrado");
  }
}
console.log(amountOfOddNumbres);

let smallerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index];
  } 
}
console.log(smallerNumber);

let arrayNumbers = [];

for (let index = 1; index < 26; index += 1 ) {
    arrayNumbers.push(index);
}

console.log(arrayNumbers);

for (let index = 0; index < arrayNumbers.length; index += 1) {
    console.log(arrayNumbers[index] / 2);
}