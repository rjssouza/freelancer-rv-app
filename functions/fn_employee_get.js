const _ = require('lodash');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = async ({ query, headers, body }, response) => {
  const { nomeCompleto } = query;
  debug(`Filtro: ${nomeCompleto}`);
  const dbEmployee = await getDatabase('colaboradores');
  if (!nomeCompleto) { return dbEmployee.find({}); }

  return dbEmployee.find({ nomeCompleto });
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    getEmployee,
    { query, headers, body },
    response,
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
