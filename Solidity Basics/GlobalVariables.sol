// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;


contract GlobalVariables {
    function globalVars() external view returns (address, uint, uint, uint, uint, bytes4) {
        address sender = msg. sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        uint gaslimit = block.gaslimit;
        uint gasPrice = tx.gasprice;
        bytes4 sig = msg.sig;
        return (sender, timestamp, blockNum, gaslimit, gasPrice, sig);
    }
}

//the global variables that you declared will return the data if you run ti successfully. 