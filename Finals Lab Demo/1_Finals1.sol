// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FallbackExample {
    event FallbackReceived(address sender, uint amount);
    // Event to log payment received
    event PaymentReceived(address payer, uint256 amount);
    // Fallback function
    fallback() external payable {
        emit FallbackReceived(msg.sender, msg.value);
    }
    // Function to receive Ether
    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }
}
//DHANA GRACE F. BERMUDEZ
//In this actvity, I've learned that this function is a safety for the smart contract. It helps the contract to handle Ether transfers smoothly and securely.