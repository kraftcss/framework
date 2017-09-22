const fs = require('fs-extra');

const dest = './generic/_normalize.scss';

fs.copy(require.resolve('normalize.css'), dest, err => {
  if (err) return console.error(err);

  console.log(`Successfully copied normalize.css to ${dest}`);
});
