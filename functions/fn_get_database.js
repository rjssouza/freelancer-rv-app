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
    const tmpCollection = global.context.services
      .get(serviceName)
      .db(dbName)
      .collection(dbCollection);

    Object.defineProperty(tmpCollection, 'findOneAndUpdateWithLogs', {
      async value(arg1, arg2, arg3) {
        const savedObject = await tmpCollection.findOneAndUpdate(arg1, arg2, arg3);
        debug('Object saved', savedObject);

        return savedObject;
      },
      writable: true,
      configurable: true,
      enumerable: false,
    });

    collection = {
      name: dbCollection,
      col: tmpCollection,
    };
    collectionDictionary.push(collection);
  }

  return collection.col;
}

async function main(dbCollection) {
  return global.context.functions.execute(
    'fn_handler',
    getDatabase,
    dbCollection,
  );
}

// fn_get_database
exports = main;

if (typeof module !== 'undefined') {
  module.exports = main;
}
