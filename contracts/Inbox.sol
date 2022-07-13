// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox {
    string public message;

    constructor(string memory _initialMessage) public {
        message = _initialMessage;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
