const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const removeEmployee = async ({ query, headers, body }, response) => {
  const { id } = query;
  const validation = await validate();
  validation
    .isRequired(id, 'id')
    .finalize();

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
    }, {
      $match: {
        searchId: id,
      },
    },
  ];

  const dbEmployee = await getDatabase('colaboradores');
  const cursor = await dbEmployee.aggregate(agg).toArray();

  cursor.forEach((element) => dbEmployee.deleteOne({ _id: element._id }));

  return true;
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
