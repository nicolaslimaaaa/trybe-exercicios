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

let nota = 67;

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

