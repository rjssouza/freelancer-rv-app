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
  cursor.forEach((element) => dbEmployee.deleteOne({ _id: element._id }));
  debug(`Colaborador de id: ${id} deletado com sucesso`)
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
