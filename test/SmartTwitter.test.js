//assertions for deployed contract

const assert = require('assert'); //assertions about tests e.g val1 = val2
const ganache = require('ganache'); // local eth test network
const Web3 = require('web3'); //constructor for web3 library
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile'); 
