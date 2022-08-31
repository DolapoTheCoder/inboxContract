// compile code will go here
const path = require('path'); //cross platform compatiablity 
const fs =require('fs'); //
const solc = require('solc');

const smartTwitterPath = path.resolve(__dirname,'contracts', 'SmartTwitter.sol');
const source = fs.readFileSync(smartTwitterPath, 'utf8') //raw source code of file


module.exports = solc.compile(source, 1).contracts[':SmartTwitter'];