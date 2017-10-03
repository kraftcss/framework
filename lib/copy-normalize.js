const fs = require('fs-extra');

const DEST = './generic/_normalize.scss';

fs.copy(require.resolve('normalize.css'), DEST)
  .then(() => console.log(`Successfully copied normalize.css to ${DEST}`))
  .catch((err) => console.error(err));
