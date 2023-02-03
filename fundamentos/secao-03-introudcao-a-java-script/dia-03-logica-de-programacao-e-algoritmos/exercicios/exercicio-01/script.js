// Exercício 01 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// 1 - criar uma variável para poder receber um número
// 2 - criar um laço de repetição para fazer as multiplicações necessárias
// 3 - criar uma variável para armazenar as multiplicações 
// 4 - imprimir o resultado na tela

let numero = 10;
let mult = 1;

for(let index = numero; index >= 2; index -= 1){
    mult = mult * index;
}
    console.log(mult);

// --------------------------------------------------------------------------------------------------------

// Exercício 02 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// 1 - criar uma variável para receber a palavra invertida
// 2 - percorrer a palavra contida na variável word
// 3 - inverter a ordem das letras da plavra contida na variável word
// 4 - imprimir a palavra invertida

let word = 'Nicolas';

let palavraInvertida = '';

for(let index = word.length - 1; index >= 0; index -= 1) {
    palavraInvertida = palavraInvertida + word[index];
}
    console.log(palavraInvertida);

// // Exercício 03 - Considere o array de strings abaixo: 
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let countCharacters = 0;
let biggestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (biggestWord.length < array[index].length) {
        biggestWord = array[index];
        countCharacters = biggestWord.length
    };
};

console.log(`A maior palavra é ${biggestWord} com ${countCharacters} caracteres`);

let countCharacters2 = 0;
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (smallestWord.length > array[index].length) {
        smallestWord = array[index];
        countCharacters2 = smallestWord.length
    };
};

console.log(`A menor palavra é ${smallestWord} com ${countCharacters2} caracteres`);

// Exercício 04 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 10000000000000; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);