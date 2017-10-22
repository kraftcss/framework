const { render } = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { outputFile } = require('fs-extra');

const SRC = './example.main.scss';
const DEST = './dist/kraft.css';

render({ file: SRC }, (err, result) => {
  if (err) throw err;

  postcss([autoprefixer])
    .process(result.css, { from: SRC, to: DEST })
    .then(result => outputFile(DEST, result))
    .then(() => console.log(`Successfully compiled to ${DEST}`))
    .catch(err => console.error(err));
});
