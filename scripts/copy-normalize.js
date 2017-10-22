const { pathExists, copy } = require('fs-extra');

const SRC = require.resolve('normalize.css');
const DEST = './generic/_normalize.scss';

pathExists(DEST).then((exists) => {
  if (! exists) {
    copy(SRC, DEST)
      .then(() => console.log(`Successfully copied normalize.css to ${DEST}`))
      .catch((err) => console.error(err));
  }
});
