// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const divisivel3E5 = (number) => number % 3 === 0 && number % 5 === 0;

numbers.find((numbers) => divisivel3E5(numbers));

// console.log(numbers.find((numbers) => divisivel3E5(numbers)));

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const tamanho5 = (nome) => nome.length === 5;

names.find((nomes) => tamanho5(nomes));

// console.log(names.find((nomes) => tamanho5(nomes)));

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const findId = (musica) => musica.id === '31031685';

musicas.find((music) => findId(music));

// console.log(musicas.find((music) => findId(music)));