const notaDesafio = 100;

if (notaDesafio >= 80){
    console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!');
} else if (notaDesafio >= 60 && notaDesafio < 80) {
    console.log('Você está na nossa lista de espera');
} else if (notaDesafio < 60) {
    console.log('Infelizmente, você reprovou.');
}

