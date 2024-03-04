/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
const v8n = require('v8n');

const validate = (dictionary = []) => {
  function isDateValid() {
    return (value) => !isNaN(new Date(value));
  }

  v8n.extend({ isDateValid });

  return {
    isRequired: (value, propriedade) => isRequired(value, propriedade, dictionary),
    isValidDate: (value, propriedade) => isValidDate(value, propriedade, dictionary),
    finalize: () => {
      dictionary.forEach((test) => {
        test();
      });
    },
  };
};

const isRequired = (nome, propriedade, dictionary) => {
  const test = () => v8n()
    .string()
    .testAsync(nome)
    .catch((ex) => {
      throw Error(`O campo ${propriedade} é obrigatório`);
    });

  dictionary.push(test);

  return validate(dictionary);
};

const isValidDate = (nome, propriedade, dictionary) => {
  const test = () => v8n()
    .string()
    .isDateValid()
    .testAsync(nome)
    .catch((ex) => {
      throw Error(`O campo ${propriedade} é uma data inválida`);
    });

  dictionary.push(test);

  return validate(dictionary);
};

// fn_validate
exports = validate;

if (typeof module !== 'undefined') {
  module.exports = validate;
}
