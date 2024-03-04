const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: '65e62647af3d646b35cd21f1' }, headers: null, body: null,
  }, null);
});
