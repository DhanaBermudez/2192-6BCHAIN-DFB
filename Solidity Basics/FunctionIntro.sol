// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

contract FunctionIntro {
    //functions can return multiple values.
    function add(uint x, uint y) external pure returns (uint) {
        return (x + y);
    }

    function sub(uint x, uint y) external pure returns (uint) {
        return (x - y);
    }
    function product (uint x, uint y) external pure returns (uint) {
        return (x * y);
    }
    function quotient(uint x, uint y) external pure returns (uint) {
            return (x / y);
    }
}