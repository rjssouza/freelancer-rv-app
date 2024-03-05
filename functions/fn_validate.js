/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
const v8n = require('v8n');
const _ = require('lodash');

const validate = (dictionary = []) => {
  function isDateValid() {
    return (value) => !isNaN(new Date(value));
  }

  v8n.extend({ isDateValid });

  return {
    isRequired: (value, property) => isRequired(value, property, dictionary),
    isValidDate: (value, property) => isValidDate(value, property, dictionary),
    conditionalRequired: (property, ...args) => conditionalRequired(
      property,
      dictionary,
      ...args,
    ),
    finalize: () => {
      dictionary.forEach((test) => {
        test();
      });
    },
  };
};

const isRequired = (nome, property, dictionary) => {
  const test = () => v8n()
    .string()
    .testAsync(nome?.toString())
    .catch((ex) => {
      throw Error(`O campo ${property} é obrigatório`);
    });

  dictionary.push(test);

  return validate(dictionary);
};

const isValidDate = (nome, property, dictionary) => {
  const test = () => v8n()
    .string()
    .isDateValid()
    .testAsync(nome)
    .catch((ex) => {
      throw Error(`O campo ${property} é uma data inválida`);
    });

  dictionary.push(test);

  return validate(dictionary);
};

const conditionalRequired = (property, dictionary, ...args) => {
  const value = _.findLast(args, (o) => o && o !== '' && o !== null);
  const test = () => v8n()
    .string()
    .testAsync(value)
    .catch((ex) => {
      throw Error(`O campo ${property} é obrigatório`);
    });

  dictionary.push(test);

  return validate(dictionary);
};

// fn_validate
exports = validate;

if (typeof module !== 'undefined') {
  module.exports = validate;
}
