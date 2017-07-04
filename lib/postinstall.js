const fs = require('fs-extra');

fs.copy('./node_modules/normalize.css/normalize.css', './generic/_normalize.scss', err => {
  if (err) return console.error(err);

  console.log('Successfully copied normalize.css');
});
