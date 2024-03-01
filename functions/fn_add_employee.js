const _ = require('lodash');

const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const addEmployee = async ({ query, headers, body }, response) => {
  const dbColaboradores = await getDatabase('colaboradores');
  const colaborador = JSON.parse(body.text());
  info("Request:", colaborador);

  const validation = await validate();
  validation
    .isRequired(colaborador.nomeCompleto, "nome completo")
    .isRequired(colaborador.dataNascimento, "data nascimento")
    .isValidDate(colaborador.dataNascimento, "data nascimento")
    .finalize();

  const id = await dbColaboradores.findOneAndUpdate(
    { nomeCompleto: "Robson Jesus de Souza" },
    { $set: colaborador },
    { upsert: true, returnDocument: 'after', returnNewDocument: true }
  );
  info("Request body:", id);

  return id;
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    addEmployee,
    { query, headers, body }, response
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
