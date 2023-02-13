// Crie um irmão para elementoOndeVoceEsta.

let pai = document.querySelector('#pai');

let irmaoDoElementoOndeVoceEsta = document.createElement('section');

irmaoDoElementoOndeVoceEsta.innerText = 'Irmão do elementoOndeVoceEsta';

pai.appendChild(irmaoDoElementoOndeVoceEsta);



// Crie um filho para elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let filhoDoElementoOndeVoceEsta = document.createElement('p');

filhoDoElementoOndeVoceEsta.innerText = 'Sou o filho do elementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);



// Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let filhoDoPrimeiroFilhoDoFilho = document.createElement('p');

filhoDoPrimeiroFilhoDoFilho.innerText = 'Sou o filho do primeiroFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);



// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);