// compile code will go here
const path = require('path'); //cross platform compatiablity 
const fs =require('fs'); //
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8') //raw source code of file


module.exports = solc.compile(source, 1).contracts[':Inbox'];