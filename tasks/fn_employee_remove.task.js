const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e5e8c6af3d646b35b6ed44' }, headers: null, body: null,
  }, null);
});
