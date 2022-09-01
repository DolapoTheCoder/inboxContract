// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");

// const smarttwitterPath = path.resolve(__dirname, "contracts", "SmartTwitter.sol");
// const source = fs.readFileSync(smarttwitterPath, "utf8");

// module.exports = solc.compile(source, 1).contracts[":SmartTwitter"];


/* const smartTwitterPath = path.resolve(__dirname, 'contracts', 'SmartTwitter.sol');
const source = fs.readFileSync(smartTwitterPath, 'utf8');
 
const input = {
    language: 'Solidity',
    sources: {
        'SmartTwitter.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};
 
 
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'SmartTwitter.sol'
].SmartTwitter; */
/* 
const smartTwitterPath = path.resolve(__dirname, 'contracts', 'SmartTwitter.sol');
const source = fs.readFileSync(smartTwitterPath, 'utf8');
 
const input = {
    language: 'Solidity',
    sources: {
        'SmartTwitter.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const buildPath = path.resolve(__dirname, 'build');
const output = JSON.parse(solc.compile(JSON.stringify(input)));


if(output.errors) {
    output.errors.forEach(err => {
        console.log(err.formattedMessage);
    });
} else {
    const contracts = output.contracts["SmartTwitter.sol"];
    for (let contractName in contracts) {
        const contract = contracts[contractName];
        fs.writeFileSync(path.resolve(buildPath, `${contractName}.json`), JSON.stringify(contract.abi, null, 2), 'utf8');
    }
} */


const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); //deleting path

const smarttwitterPath = path.resolve(__dirname, 'contracts', 'SmartTwitter.sol');

const source =  fs.readFileSync(smarttwitterPath, 'utf8');

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //create build folder

for ( let contract in output ) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}