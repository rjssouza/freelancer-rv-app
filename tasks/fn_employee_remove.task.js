const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e61bcaaf3d646b35ca1a3c' }, headers: null, body: null,
  }, null);
});
