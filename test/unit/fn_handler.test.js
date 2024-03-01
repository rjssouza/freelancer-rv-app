require('../init');
const fnHandler = require('../../functions/fn_handler');

// npm test -- ./test/unit/f_handler.test.js
describe('fn_handler', () => {
  const objTeste = {
    name: 'test',
  };

  it('Chamar função genérica por meio do interceptador', async () => {
    const triggerProcessReqDataRequests = jest.fn(async (obj) => obj);

    const handler = jest.fn(async (obj) => fnHandler(triggerProcessReqDataRequests, obj));
    const result = await handler(objTeste);

    expect(triggerProcessReqDataRequests).toHaveBeenCalled();
    expect(triggerProcessReqDataRequests).toHaveReturned();
    expect(result).not.toBeNull();
  });

  it('Chamar função genérica a disparar exceção', async () => {
    const triggerProcessReqDataRequests = jest.fn(() => {
      throw new Error('Error test');
    });
    jest.fn((obj) => fnHandler(triggerProcessReqDataRequests, obj));

    expect(triggerProcessReqDataRequests).toThrow();
    expect(triggerProcessReqDataRequests).toHaveBeenCalled();
  });
});
