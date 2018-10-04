# Operated

Source file [../contracts/Operated.sol](../contracts/Operated.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// AG Ok
import "Owned.sol";


// ----------------------------------------------------------------------------
// Maintain a list of operators that are permissioned to execute certain
// functions
// ----------------------------------------------------------------------------

// AG Ok
contract Operated is Owned {
    // AG Ok
    mapping(address => bool) public operators;
    // AG Ok - Events
    event OperatorAdded(address _operator);
    event OperatorRemoved(address _operator);
    // AG Ok
    modifier onlyOperator() {
        // AG Ok - Operator (or owner) modifier
        require(operators[msg.sender] || owner == msg.sender);
        // AG Ok
        _;
    }
    // AG Ok
    function initOperated(address _owner) internal {
        // AG Ok - Sets owner once, sets owned initialised flag
        initOwned(_owner);
    }
    // AG Ok
    function addOperator(address _operator) public onlyOwner {
        // AG Ok
        require(!operators[_operator]);
        // AG Ok
        operators[_operator] = true;
        // AG Ok
        emit OperatorAdded(_operator);
    }
    // AG Ok
    function removeOperator(address _operator) public onlyOwner {
        // AG Ok
        require(operators[_operator]);
        // AG Ok
        delete operators[_operator];
        // AG Ok 
        emit OperatorRemoved(_operator);
    }
}
```
