// Tópico 01

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()

  //--------------------------------------------------------------------------------------------------------

  // Tópico 02

    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa.nome = 'Luna'
      pessoa.idade = 19
       // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);

  //--------------------------------------------------------------------------------------------------------
    
  // Tópico 03

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);