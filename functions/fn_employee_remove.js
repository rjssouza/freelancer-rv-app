const validate = () => context.functions.execute('fn_validate');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = (id) => context.functions.execute('fn_employee_get', {
  query: { id }, headers: null, body: null,
});

const removeEmployee = async ({ query, headers, body }, response) => {
  const { id } = query;
  const validation = await validate();
  validation
    .isRequired(id, 'id')
    .finalize();
  const dbEmployee = await getDatabase('colaboradores');
  const cursor = await getEmployee(id);
  if (cursor.length <= 0)
    return false;

  const employee = cursor[0];
  debug(`Colaborador de id: ${id} deletado com sucesso`);

  return dbEmployee.deleteOne({ _id: employee._id });
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
