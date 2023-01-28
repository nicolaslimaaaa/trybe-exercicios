const a = 15;
const b = 25;

let adicao = a + b;
    console.log(adicao);

let subtracao = a - b;
    console.log(subtracao);

let multiplicacao = a * b;
    console.log(multiplicacao);

let divisao = a / b;
    console.log(divisao);

let modulo = a % b;
    console.log(modulo);

// ---------------------------------------------------------------------------------------------------------

if (a < b) {
    console.log(b + ' é o maior número.');
} else {
    console.log(a + ' é o maior número');
}

// ---------------------------------------------------------------------------------------------------------

const c = 50;

if (a > b && a > c ) {
    console.log(a + ' é o maior número');
} else if (b > a && b > c){
    console.log(b + ' é o maior número');
} else if (c > a && c > b){
    console.log(c + ' é o maior número');
}

// ---------------------------------------------------------------------------------------------------------

let parametro = 10;

if (parametro > 0){
    console.log('positive');
} else if (parametro < 0){
    console.log('negative');
} else {
    console.log('zero');
}

// ---------------------------------------------------------------------------------------------------------

const x = 30;
const y = 90;
const z = 60;

if (x + y + z == 180) {
    console.log(true);
} else if (x < 0 || y < 0 || z < 0) {
    console.log('Erro: ângulo inválido');
} else {
    console.log (false);
}

// ---------------------------------------------------------------------------------------------------------

let pecaXadrez = 'Dama';
let peca = pecaXadrez.toLowerCase();

switch (peca) {
    case 'peão':
    console.log('Peão -> Movimento: sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
    break;

    case 'bispo':
        console.log('Bispo -> Movimento: move-se na diagonal, quantas casas quiser.');
        break;

    case 'cavalo':
        console.log('Cavalo -> Movimento: é a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. Pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante (movimenta "em L").');
        break;

    case 'torre':
        console.log('Torre -> Movimento: em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;

    case 'dama':
        console.log('Dama -> Movimento: pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.');
        break;
    
    case 'rei':
        console.log('Rei -> Movimento: pode mover-se em qualquer direção, porém apenas uma casa por vez.');
        break;

        default:
        console.log('Erro: peça inserida não existe!')
}

// ---------------------------------------------------------------------------------------------------------

let nota = 0;

if (nota >= 90 && nota <= 100) {
    console.log('A');
} else if (nota >= 80 && nota < 90) {
    console.log('B');
} else if (nota >=70 && nota < 80) {
    console.log('C');
} else if (nota >= 60 && nota <70) {
    console.log('D');
} else if (nota >= 50 && nota < 60) {
    console.log('E');
} else if (nota < 50) {
    console.log('F');
} else if (nota < 0 || nota > 100) {
    console.log(`Erro nota inserida inválida!`);
}

// ---------------------------------------------------------------------------------------------------------

/* 
Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

Bonus: use somente um if.
*/

const num1 = 15;
const num2 = 25;
const num3 = 80;

if (num1 % 2 === 0 || num2 %  2 ===0 || num3 % 2 ===0) {
    console.log(true);
} else {
    console.log(false);
}

// ---------------------------------------------------------------------------------------------------------

/*
Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

Bonus: use somente um if.
*/

if (num1 % 2 !== 0 || num2 %  2 !==0 || num3 % 2 !==0) {
    console.log(true);
} else {
    console.log(false);
}

// ---------------------------------------------------------------------------------------------------------

/*
Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);
*/


let qtdVendida = 1000;
const custoProduto = 10;
const valorVenda = 30;
let lucro = 0;
let custoTotal = 0;

if (custoProduto !== 0 && valorVenda !== 0) {
    custoTotal = custoProduto + (0.2 * custoProduto);
    lucro = (lucro + valorVenda - custoTotal) * qtdVendida;
    console.log(`O lucro na venda de ${qtdVendida} produtos foi de R$${lucro}!`)

} else {
    console.log('Erro: valores inseridos estão errados!')
}
