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
        .get(serviceName)
        .db(dbName)
        .collection(dbCollection),
    };
    collectionDictionary.push(collection);
  }

  return collection.col;
}

async function main(dbCollection) {
  return global.context.functions.execute(
    'f_handler',
    getDatabase,
    dbCollection
  );
}

// f_get_database
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
