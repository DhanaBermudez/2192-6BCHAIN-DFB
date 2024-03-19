// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet {
address payable public owner;

constructor() payable {
owner = payable(msg.sender);
}

receive() external payable {}

function withdraw(uint _amount) external {
require(msg.sender == owner, "Only owner can withdraw");
require(_amount <= address(this).balance, "Insufficient balance");
owner.transfer(_amount);
}

function getBalance() external view returns (uint) {
return address(this).balance;
}
}

//DHANA GRACE F. BERMUDEZ
//In this activity, it shows that if you put the value, you can also withdraw an amount  and the balance will also update.