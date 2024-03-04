const _ = require('lodash');
// eslint-disable-next-line import/no-extraneous-dependencies
const { ObjectId } = require('mongodb');

const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const removeEmployee = async ({ query, headers, body }, response) => {
  const { id } = query;
  const dbColaboradores = await getDatabase('colaboradores');
  const validation = await validate();
  validation
    .isRequired(id, 'id')
    .finalize();

  return dbColaboradores.deleteOne({ _id: new ObjectId(id) });
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    removeEmployee,
    { query, headers, body },
    response,
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
