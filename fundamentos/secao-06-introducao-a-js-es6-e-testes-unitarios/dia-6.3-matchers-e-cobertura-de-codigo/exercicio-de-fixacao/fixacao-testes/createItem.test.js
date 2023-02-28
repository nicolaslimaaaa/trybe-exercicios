const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toMatchObject({
        name: 'banana',
        unit: 'kg',
        price: 1.99,
        quantity: 20,
    });
  });

  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toMatchObject({
        name: 'banana',
        unit: 'kg',
        price: 1.99,
        quantity: 0,
    });
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(10, 'kg', 1.99, 20)}).toThrow('O nome do item deve ser uma string');
  });

//   it.todo('Lança um erro se o preço é negativo');
//   it.todo('Lança um erro se o preço é zero');
});