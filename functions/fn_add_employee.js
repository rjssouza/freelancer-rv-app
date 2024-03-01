const _ = require('lodash');
const v8n = require("v8n");

const validar = (colaborador) => {
  validarNome(colaborador.nome);
}

const validarNome = (nome) => {
  return v8n().string().minLength(3).check(nome);
};

const getDatabase = (dbCollection) => functions.execute('fn_get_database', dbCollection);

const addEmployee = async ({ query, headers, body}, response) => {
    const dbColaboradores = await getDatabase('colaboradores');
    const colaborador = JSON.parse(body.text());
    validar(colaborador);
    const id = await dbColaboradores.findOneAndUpdate(
      { nomeCompleto: "Robson Jesus de Souza" },
      { $set: colaborador },
      { upsert: true, returnDocument: 'after', returnNewDocument: true }
    );
    info("Request body:", id);

    return id;
};

async function main({ query, headers, body}, response) {
  return global.context.functions.execute(
    'fn_handler',
    addEmployee,
    { query, headers, body}, response
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
