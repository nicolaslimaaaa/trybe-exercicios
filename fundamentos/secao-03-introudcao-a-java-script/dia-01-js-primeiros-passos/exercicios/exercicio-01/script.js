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

// ---------------------------------------------------------------------------------------------------------

/*
Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

//                                     --------------------------

/*
1 - criar uma variável para receber o salário bruto;
2 - criar constantes para receber os valores descontados do INSS e do IR;
3 - criar uma condicional para verificar qual o valor das váriaveis do INSS e IR;
4 - descobrir o salário base
5 - descobrir o salário liquido
6 - devolver o salário líquido na tela
*/

let salarioBruto = 3000;
let salarioBase = 0;
let impostoDeRenda = 0;
let salarioLiquido = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (0.08 * salarioBruto);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (0.09 * salarioBruto);
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (0.11 * salarioBruto);
} else if (salarioBruto >= 5189.83) {
    salarioBase = salarioBruto - 570.88
} else {
    console.log(`Salário informado inválido!`);
}

    // console.log(salarioBase);


if (salarioBase > 0 && salarioBase <= 1903.98) {
    impostoDeRenda = `Não houve desconto de Imposto de Renda`;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoDeRenda = (0.075 * salarioBase) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoDeRenda = (0.15 * salarioBase) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoDeRenda = (0.225 * salarioBase) - 636.13;
} else if (salarioBase >= 4664.68) {
    impostoDeRenda = (0.275 * salarioBase) - 869,36
} 

// console.log(impostoDeRenda);

salarioLiquido = salarioBase - impostoDeRenda;

console.log(salarioLiquido);

