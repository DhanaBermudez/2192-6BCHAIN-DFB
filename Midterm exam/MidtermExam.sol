// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract GradeContract {
    address public owner;

    enum GradeStatus {Pass, Fail}

    struct Student {
        string name;
        uint8 prelimGrade;
        uint8 midtermGrade;
        uint8 finalGrade;
        uint8 overallGrade;
        GradeStatus status;
    }
    mapping(address => Student) public students;

    modifier onlyOwner() {
        require(msg.sender == owner, "This is not the caller");
        _;

    }
    modifier validGrade(uint8 grade) {
        require(grade <= 100 && grade >=0, "Invalid Grade, must be between 0 and 100");
        _;
    }
    event GradeComputed(string indexed studentName, GradeStatus status);

    constructor() {
        owner = msg.sender;
    }
    function setName(string calldata _name) public onlyOwner {
        students[msg.sender].name = _name;
    }
    function setPrelimGrade(uint8 _prelimGrade) public onlyOwner validGrade(_prelimGrade) {
        students[msg.sender].prelimGrade = _prelimGrade;
    }
    function setMidtermGrade(uint8 _midtermGrade) public onlyOwner validGrade(_midtermGrade) {
        students[msg.sender].midtermGrade = _midtermGrade;
    }
    function setFinalGrade(uint8 _finalGrade) public onlyOwner validGrade(_finalGrade) {
        students[msg.sender].finalGrade= _finalGrade;

    }
    function calculatedGrade() public onlyOwner {
  Student storage student = students[msg.sender];
  
  require(student.prelimGrade >0 && student.midtermGrade > 0 && student.finalGrade > 0, "Grades not sent");

  uint8 averageGrade = (student.prelimGrade + student.midtermGrade + student.finalGrade) / 3;

  if (averageGrade >= 50) {
    student.status = GradeStatus.Pass; }
    else {
        student.status = GradeStatus.Fail;
    }
    emit GradeComputed(student.name, student.status);
  }
}

//DHANA GRACE F. BERMUDEZ
//WD - 401