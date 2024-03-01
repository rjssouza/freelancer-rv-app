const PRODUCTION = 'production';
const POSFIX = 'mongodb-atlas';
const collectionDictionary = [];

async function getDatabase(dbCollection) {
  const serviceName = global.context.environment.tag === PRODUCTION
    ? POSFIX
    : `${global.context.environment.tag}-${POSFIX}`;
  const dbName = global.context.values.get('DATABASE');
  let collection = collectionDictionary.find((c) => c.name === dbCollection);

  if (!collection) {
    collection = {
      name: dbCollection,
      col: global.context.services
        .get(POSFIX)
        .db(dbName)
        .collection(dbCollection),
    };
    collectionDictionary.push(collection);
  }

  return collection.col;
}

async function main(dbCollection) {
  return global.context.functions.execute(
    'fn_handler',
    getDatabase,
    dbCollection
  );
}

// fn_get_database
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
