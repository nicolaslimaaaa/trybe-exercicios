// 1 - criar uma variável para poder receber um número
// 2 - criar um laço de repetição para fazer as multiplicações necessárias
// 3 - criar uma variável para armazenar as multiplicações 
// 4 - imprimir o resultado na tela

let numero = 10;
let mult = 1;
let resultado = 0;

for(let index = numero; index >= 2; index -= 1){
    mult = mult * index;
    if(index === 2){
        console.log(mult);
    }
}



// testando como exibir somente uma iteração específica
// let exemplo = [1, 2, 3, 4, 5];
// let ex = 0;

// for(let index = 0; index < exemplo.length; index += 1){
//     ex = ex + exemplo[index];
//     if(index === (exemplo.length - 1)){
//         console.log(ex);
//     }
//     // console.log(ex);
// }