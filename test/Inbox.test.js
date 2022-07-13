//assertions for deployed contract

const assert = require('assert'); //assertions about tests e.g val1 = val2
const ganache = require('ganache'); // local eth test network
const Web3 = require('web3'); //constructor for web3 library
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile'); 

let accounts;
let inbox;
const INITSTRING = 'Hi there!;'

beforeEach(async () => {
    //1. get a list of accounts
    //2. use an account to deploy new contract
    accounts = await web3.eth.getAccounts(); //1

    //deploy a contract for an account

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITSTRING] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); // is this a defined value.
    });

    it('has default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,  INITSTRING);
    });

    it('can change message', async () => {
        await inbox.methods.setMessage('Bye!').send({from: accounts[0], gas: '1000000'});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye!');
    });
});