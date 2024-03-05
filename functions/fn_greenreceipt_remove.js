const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getGreenReceipt = (id) => context.functions.execute('fn_greenreceipt_get', {
  query: { id }, headers: null, body: null,
});

const removeGreenReceipt = async ({ query, headers, body }, response) => {
  const { id } = query;
  const validation = await validate();
  validation
    .isRequired(id, 'id')
    .finalize();

  const cursor = await getGreenReceipt(id);

  info('Retorno usuario para remover', cursor);
  if (cursor.length <= 0) { return false; }

  const greenReceipt = cursor[0];

  const dbGreenReceipt = await getDatabase('recibos-verdes');

  return dbGreenReceipt.deleteOne({ _id: greenReceipt._id });
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    removeGreenReceipt,
    { query, headers, body },
    response,
  );
}

// fn_add_GreenReceipt
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
