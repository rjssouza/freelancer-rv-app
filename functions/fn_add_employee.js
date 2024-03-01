const _ = require('lodash');
const v8n = require("v8n");

function isDateValid() {
  return value => !isNaN(new Date(value));
}

v8n.extend({ isDateValid });

const validar = (dictionary = []) => {
  return {
    isRequired: (value, propriedade) => isRequired(value, propriedade, dictionary),
    isValidDate: (value, propriedade) => isValidDate(value, propriedade, dictionary),
    finalize: () => {
      dictionary.forEach((test) => {
        test();
      })
    }
  }
}

const isRequired = (nome, propriedade, dictionary) => {
  const test = () => v8n()
  .string()
  .testAsync(nome)
  .catch(ex => {
    throw Error(`O campo ${propriedade} é obrigatório`)
  });

  dictionary.push(test);

  return validar(dictionary);
};

const isValidDate = (nome, propriedade, dictionary) => {
  const test = () => v8n()
  .string()
  .isDateValid()
  .testAsync(nome)
  .catch(ex => {
    throw Error(`O campo ${propriedade} é uma data inválida`)
  });

  dictionary.push(test);

  return validar(dictionary);
};

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const addEmployee = async ({ query, headers, body }, response) => {
  const dbColaboradores = await getDatabase('colaboradores');
  const colaborador = JSON.parse(body.text());
  info("Request:", colaborador);

  validar()
    .isRequired(colaborador.nomeCompleto, "nome completo")
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
