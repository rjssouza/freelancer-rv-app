const _ = require('lodash');
const { main } = require('../init');
const fnEmployeeGet = require('../functions/fn_employee_get');

main(async () => {
  await fnEmployeeGet({
    query: { employeeName: 'Robson Jesus de Souza' }, headers: null, body: null,
  }, null);
});
