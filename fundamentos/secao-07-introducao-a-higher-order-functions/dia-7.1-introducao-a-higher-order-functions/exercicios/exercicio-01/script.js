// Parte I
// Nova pessoa contratada

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const employeeData = (fullName) => {
  const nomeSemEspacos = fullName.replaceAll(' ', '_');
  const nomeMinusculo = nomeSemEspacos.toLowerCase();

  return {
    nomeCompleto: fullName,
    email: `${nomeMinusculo}@trybe.com`,
  };

};

const newEmployees = (employeeData) => {
  const employees = {
    id1: employeeData('Pedro Guerra'),
    id2: employeeData('Luiza Drumond'),
    id3: employeeData('Carla Paiva'),
  };
  return employees;
};


// console.log(newEmployees(employeeData));]

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Sorteador de loteria

const verifyNumbers = (betNumber, drawnNumber) => betNumber === drawnNumber;

const drawer = (betNumber, funcao) => {
    const drawnNumber = Math.floor((Math.random() * 5) + 1);

    return funcao(betNumber, drawnNumber);
};

// console.log(drawer(2, verifyNumbers));

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareArrays = (arr1, arr2) => {
   

};

