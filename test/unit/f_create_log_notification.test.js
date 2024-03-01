const { bootstrapDatabase, getDatabase } = require('../init');

const LOG_NOTIFICATIONS = 'log_notifications';
const LOG_TOPIC = 'reprocess_function';

const logContent = {
  name: 'test',
};

const fnDescription = (action) => {
  it('Deve estar com formato correto inserido', async () => {
    const handler = jest.fn(action);
    await handler(LOG_TOPIC, logContent);
    const collection = await getDatabase(LOG_NOTIFICATIONS);
    const result = await collection.findOne({});

    expect(result.created_at).toBeDefined();
    expect(result.topic).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.status).toBeDefined();
  });
};

// npm test -- ./test/unit/f_create_log_notification.test.js
bootstrapDatabase(
  'f_create_log_notification',
  fnDescription,
  LOG_TOPIC,
  logContent,
);
