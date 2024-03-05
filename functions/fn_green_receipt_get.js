const validate = () => context.functions.execute('fn_validate');

const validateFilter = async (filter, headers) => {
  debug('Header', headers);

  if (!headers?.Listall || headers?.Listall[0] !== 'true') {
    const validation = await validate();
    validation
      .conditionalRequired('filtro', filter.id, filter.employeeName, filter.issueDate)
      .finalize();
  }
};

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getGreenReceipt = async ({ query, headers, body }, response) => {
  const { id, employeeName, issueDate } = query;
  await validateFilter({
    id,
    employeeName,
    issueDate,
  }, headers);
  const dbGreenReceipt = await getDatabase('recibos-verdes');
  if (headers?.Listall && headers?.Listall[0] === 'true') {
    return dbGreenReceipt.find({}).toArray();
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
            'colaborador.nomeCompleto': employeeName ?? '',
          },
          {
            dataEmissao: issueDate ?? '',
          },
        ],
      },
    },
  ];
  debug('Filtro', agg);
  const result = await dbGreenReceipt.aggregate(agg).toArray();
  debug('Resultado', result);

  return result;
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    getGreenReceipt,
    { query, headers, body },
    response,
  );
}

// fn_add_GreenReceipt
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
