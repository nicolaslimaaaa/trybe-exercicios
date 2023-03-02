// Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((convidado) => convidado === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const verifyAges = (arr, idade) => arr.every((pessoa) => pessoa.age >= idade);
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));