const fs = require('fs-extra');
const chalk = require('chalk');

const dest = './generic/_normalize.scss';

fs.copy(require.resolve('normalize.css'), dest, err => {
  if (err) return console.error(err);

  console.log(chalk`
  {green Successfully copied normalize.css to ${dest}}
  `);
});
