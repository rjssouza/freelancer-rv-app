const validate = () => context.functions.execute('fn_validate');

const validateFilter = async (employeeName, id, headers) => {
  debug('Header', headers);

  if (headers?.Listall[0] !== 'true') {
    const validation = await validate();
    validation
      .conditionalRequired(id, employeeName, 'filtro')
      .finalize();
  }
};

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = async ({ query, headers, body }, response) => {
  const { employeeName, id } = query;
  await validateFilter(employeeName, id, headers);
  const dbEmployee = await getDatabase('colaboradores');
  if (headers?.Listall[0] === 'true') {
    return dbEmployee.find({}).toArray();
  }

  const agg = [
    {
      $addFields: {
        searchId: {
          $convert: {
            input: '$_id',
            to: 'string',
          },
        },
      },
    },
    {
      $match: {
        $or: [
          {
            searchId: id ?? '',
          },
          {
            nomeCompleto: employeeName ?? '',
          },
        ],
      },
    },
  ];
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
