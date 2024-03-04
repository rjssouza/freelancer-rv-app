const _ = require('lodash');

const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const addEmployee = async ({ query, headers, body }, response) => {
  const dbEmployee = await getDatabase('colaboradores');
  const employee = JSON.parse(body.text());
  const validation = await validate();
  validation
    .isRequired(employee.nomeCompleto, 'Nome Completo')
    .isRequired(employee.dataNascimento, 'Data Nascimento')
    .isRequired(employee.documento.nif, 'NIF')
    .isValidDate(employee.dataNascimento, 'Data Nascimento')
    .finalize();

  const savedObject = await dbEmployee.findOneAndUpdateWithLogs(
    { nomeCompleto: 'Robson Jesus de Souza' },
    { $set: employee },
    { upsert: true, returnDocument: 'after', returnNewDocument: true },
  );

  return savedObject;
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    addEmployee,
    { query, headers, body },
    response,
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
