const { bootstrap } = require('../init');

const LOG_NOTIFICATIONS = 'log_notifications';

// npm test -- ./test/unit/f_get_database.test.js
const fnDescription = (action) => {
  it('Deve retornar collection', async () => {
    const handler = jest.fn(action);
    const coll = await handler(LOG_NOTIFICATIONS);
    const result = await coll.find({}).toArray();

    expect(result).not.toBeNull();
  });
};

bootstrap('f_get_database', fnDescription, LOG_NOTIFICATIONS);
