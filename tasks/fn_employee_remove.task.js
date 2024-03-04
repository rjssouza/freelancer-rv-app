const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeRemove = require('../functions/fn_employee_remove');

main(async () => {
  await fnEmployeeRemove({
    query: { id: "65e1f2feb14a94b3a7fe46c8" }, headers: null, body: null
  }, null);
});
