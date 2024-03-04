const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e5f2d6af3d646b35b9fa5d' }, headers: null, body: null,
  }, null);
});
