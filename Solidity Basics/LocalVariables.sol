// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;


contract LocalVariables {
    uint public i;
    bool public b;
    address public myAddress;
    uint public a;
     uint public k = 5;


    function foo() external {
        uint x = 123;
        bool f = false;
        //more code

        x += 456;
        f = true;
        k = 10;

        i = 123;
        b = true;
        myAddress = address(1);
        a = 20;
       
    }
}
// click the foo to see the results also the only variables that will showthe results are the ones that you declared before the function