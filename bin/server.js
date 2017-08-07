require('dotenv').config()
const micro = require('micro')
const main = require('../src/index');

const PORT = process.argv[2] || 3000;

console.log(`> [Mirco-medium-api] server is running on port ${PORT}`)

micro(main).listen(PORT);
