let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
        soma = soma + numbers[i];

        console.log(numbers)

        console.log(soma);

        media = soma/numbers.length
        
        console.log(media);

        if (media > 20){
            console.log('Valor maior que 20');
        } else {
            console.log('Valor menor ou igual a 20');
        }
        
}

for (let index = 0; index < numbers.length; index += 1){
    for (let i2 = 0; i2 < numbers.length; i2 += 1){
        if (numbers[i1] < numbers[i2]){
            console.log(numbers[i1] + ' é menor que ' + numbers[i2]);
        } else {
            console.log(numbers[i1] + ' é o maior valor do array');
        }
    }
}



