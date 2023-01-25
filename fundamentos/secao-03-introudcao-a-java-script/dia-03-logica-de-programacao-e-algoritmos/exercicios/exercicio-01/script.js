// TÓPICO 1

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

// TÓPICO 2

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