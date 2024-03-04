const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e60bf3af3d646b35c40ae6' }, headers: null, body: null,
  }, null);
});
