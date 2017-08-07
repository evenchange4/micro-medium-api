const micro = require('micro');
const main = require('../src/index');

const PORT = process.argv[2] || 3000;

console.log(`> [Mirco-medium-api] server is running on port ${PORT}`); // eslint-disable-line

micro(main).listen(PORT);
