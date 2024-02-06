// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

// Data types - values and references

contract ValueTypes {
    bool public b = true;
    uint public u = 123; 




    int public i = -123;



    int public minInt = type(int).min;
    int public maxInt = type(int).max;
    address public addr = 0x9FC3da866e7DF3a1c57adE1a97c9f00a70f010c8;
    bytes32 public b32 = 0x8f6ca2a9f91351b012cfe74b6c343a151fc21ef485923984a89d9760db2cf65f;
}