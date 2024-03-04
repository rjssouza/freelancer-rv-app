const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e6256faf3d646b35cce2d5' }, headers: null, body: null,
  }, null);
});
