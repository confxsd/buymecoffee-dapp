// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Coffee {
    event NoteCreated(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    struct Note {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    Note[] notes;

    address payable owner;


    constructor() {
        owner = payable(msg.sender);
    }


    function buyCoffee(string memory _name, string memory _message) public payable {
        require(msg.value > 0, "can't buy with this amount");

        notes.push(Note(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        emit NoteCreated(msg.sender, block.timestamp, _name, _message);

    }


    function withdraw() public {
        require(owner.send(address(this).balance));
    }


    function getNotes() public view returns(Note[] memory) {
        return notes;
    }
}