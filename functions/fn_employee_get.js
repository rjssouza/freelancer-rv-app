const _ = require('lodash');

const getDatabase = (dbCollection) => context.functions.execute('fn_get_database', dbCollection);

const getEmployee = async ({ query, headers, body }, response) => {
	const { nome } = query;
	info(nome)
	const dbColaboradores = await getDatabase('colaboradores');
	if (!nome)
		return dbColaboradores.find({ nomeCompleto: nome });
	return dbColaboradores.find({ nomeCompleto: nome });
};

async function main({ query, headers, body }, response) {
	return global.context.functions.execute(
		'fn_handler',
		getEmployee,
		{ query, headers, body }, response
	);
}

// fn_add_employee
exports = main;

if (typeof module !== 'undefined') {
	module.exports = main;
}
