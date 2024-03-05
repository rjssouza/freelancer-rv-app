const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = (id) => context.functions.execute('fn_employee_get', {
  query: { id }, headers: null, body: null,
});

const addGreenReceipt = async ({ query, headers, body }, response) => {
  const dbGreenReceipts = await getDatabase('recibos-verdes');
  const greenReceipt = JSON.parse(body.text());
  const { idEmployee } = query;
  const employee = await getEmployee(idEmployee);

  const validation = await validate();
  validation
    .isRequired(employee, 'Colaborador')
    .isRequired(greenReceipt.dataEmissao, 'Data Emissão')
    .isRequired(greenReceipt.anexo, 'Anexo')
    .isValidDate(greenReceipt.dataEmissao, 'Data Emissão')
    .finalize();

  greenReceipt.colaborador = employee;

  const savedObject = await dbGreenReceipts.findOneAndUpdateWithLogs(
    { dataEmissao: greenReceipt.dataEmissao, 'colaborador._id': idEmployee },
    { $set: greenReceipt },
    { upsert: true, returnDocument: 'after', returnNewDocument: true },
  );

  return savedObject;
};

async function main({ query, headers, body }, response) {
  return global.context.functions.execute(
    'fn_handler',
    addGreenReceipt,
    { query, headers, body },
    response,
  );
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
