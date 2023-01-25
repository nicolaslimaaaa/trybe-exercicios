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

