const _ = require('lodash');
const process = require('process');
const execute = require('./init');

let _fn = _.find(process.argv, (args) => args.split('=')[0] === '--fn');
if (!_fn) throw new Error('Necessário indicar função');
[_fn] = _fn.split('=');

const args = process.argv.length <= 4
  ? []
  : _(process.argv)
    .drop(4)
    .take(process.argv.length)
    .value()
    .map((v) => {
      try {
        return JSON.parse(v);
      } catch (err) {
        return v;
      }
    });

execute(_fn, ...args);
