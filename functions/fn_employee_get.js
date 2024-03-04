const _ = require('lodash');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = async ({ query, headers, body }, response) => {
  const { nomeCompleto, id } = query;
  debug(`Filtro: ${nomeCompleto}`);
  const agg = [
    {
      $addFields: {
        searchId: {
          $convert: {
            input: "$_id",
            to: "string",
          },
        },
      },
    },
    {
      $match: {
        $or: [
          {
            searchId: id,
          },
          {
            nomeCompleto
          },
        ],
      },
    },
  ];
  const dbEmployee = await getDatabase('colaboradores');
  if (!nomeCompleto && !id) { return dbEmployee.find({}); }
  debug('Filtro', agg);

  const result = await dbEmployee.aggregate(agg).toArray();
  debug('Resultado', result);

  return result;
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
