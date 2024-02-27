    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.3;

    contract MQuizContract {
    address public owner;
    uint256 public age;
    uint256 public hoursWorked;
    uint256 public hourlyRate;
    uint256 public totalSalary;

 
    modifier onlyOwner() {
    require(msg.sender == owner, "This caller is not the owner");
    _;
    }

    modifier greaterThanZero(uint256 value, string memory errorMessage) {
    require(value > 0, errorMessage);
    _;
    }

    constructor() {
    owner = msg.sender;
    }

    function setAge(uint256 _age) external {
    age = _age;
    }

    function setHoursWorked(uint256 _hoursWorked) external onlyOwner greaterThanZero(_hoursWorked, "The hours work must be greater than zero") {
    hoursWorked = _hoursWorked;
    }

    function setHourlyRate(uint256 _hourlyRate) external greaterThanZero(_hourlyRate, "The hourly rate must be greater than zero") {
    hourlyRate = _hourlyRate;
    }

    function calculateTotalSalary() external onlyOwner {
    require(hourlyRate > 0 && hoursWorked > 0, "The Hourly rate or hours worked cannot be zero");
    totalSalary = hourlyRate * hoursWorked;
    }
    }

    //DHANA GRACE F. BERMUDEZ
    // WD - 401