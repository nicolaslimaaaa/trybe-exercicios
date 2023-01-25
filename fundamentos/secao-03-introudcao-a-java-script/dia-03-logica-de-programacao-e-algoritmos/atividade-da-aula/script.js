// // 1 - 
// // Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// 1 - criar uma variável para armazenar a soma
// 2 - percorrer os numeros de 1 a 50 com o for
// 3 - somar cada numero de cada iteração
// 4 - imprimir na tela o resultado

let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma += index;
}
console.log('A soma total de 1 a 50 é:', soma);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// 1 - criar uma variavel para contar os numeros divisiveis por 3
// 2 - percorrer os números entre 2 e 150 (sem incluir 2 e 150) 
// 3 - criar uma condiçao para determinar  se o numero é divisível por 3
// 4 - imprimir uma mensagem secreta

let contador = 0;

for (let index = 3; index < 150; index += 1) {
    if (index % 3 === 0){
        contador += 1
    }
}
    console.log(contador)

if (contador === 50){
    console.log('Você ganhou');
} else {
    console.log('Não vai recerber a mensagem secreta');
}
