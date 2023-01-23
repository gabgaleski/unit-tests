const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toEqual('function');
    expect(Array.isArray(productDetails())).toEqual(true);
    expect(productDetails().length).toEqual(2);
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');
    expect(productDetails('Margarina', 'Manteiga')).toEqual([{name: 'Margarina',
      details: {
        productId: `Margarina123`,
      },},{name: 'Manteiga',
        details: {
          productId: `Manteiga123`,
        },}]);
    expect(productDetails('gel', 'mascara')[0].details.productId).toEqual('gel123');
    expect(productDetails('gel', 'mascara')[1].details.productId).toEqual('mascara123');
  });
});
