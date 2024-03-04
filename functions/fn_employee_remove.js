const _ = require('lodash');

const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const removeEmployee = async ({ query, headers, body }, response) => {
  const { id } = query;
  const dbColaboradores = await getDatabase('colaboradores');
  const validation = await validate();
  validation
    .isRequired(id, "id")
    .finalize();

  const result = await dbColaboradores.deleteOne({ _id: id });

  return result;
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    removeEmployee,
    { query, headers, body }, response
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
