let player = {
    nome: 'Marta',
    lastName : 'Silva',
    age : 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('A jogadora', player.nome, player.lastName, 'tem', player.age, 'anos de idade');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora', player.nome, player.lastName, 'foi eleita melhor do mundo por 6 vezes:', player['bestInTheWorld']);

console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata.')
