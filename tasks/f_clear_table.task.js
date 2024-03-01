const _ = require('lodash');
const { main, getDatabase } = require('../init');

const [, collectionName] = _.find(process.argv, (args) => args.split('=')[0] === '--collectionName')
  .split('=');
if (!_.some(process.argv, (args) => args.split('=')[0] === '--collectionName')) {
  throw Error('Obrigatório informar a collcetion a ser limpa');
}

const clearCollection = async () => {
  const collection = await getDatabase(collectionName);

  await collection.deleteMany({});
};

main(async () => {
  await clearCollection();
});
