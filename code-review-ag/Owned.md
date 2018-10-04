# Owned

Source file [../contracts/Owned.sol](../contracts/Owned.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// Owned contract
// ----------------------------------------------------------------------------
// AG Ok
contract Owned {
    // AG Ok
    address public owner;
    address public newOwner;
    bool private initialised;

    // AG OK - Event
    event OwnershipTransferred(address indexed _from, address indexed _to);

    // AG Ok
    modifier onlyOwner {
        // AG Ok
        require(msg.sender == owner);
        // AG Ok
        _;
    }
    // AG Ok
    function initOwned(address _owner) internal {
        // AG Ok
        require(!initialised);
        // AG Ok
        owner = _owner;
        // AG Ok
        initialised = true;
    }
    // AG Ok
    function transferOwnership(address _newOwner) public onlyOwner {
        // AG Ok - Could add "require(_newOwner != owner);" but would work identically.
        newOwner = _newOwner;
    }
    // AG Ok
    function acceptOwnership() public {
        // AG Ok
        require(msg.sender == newOwner);
        // AG Ok
        emit OwnershipTransferred(owner, newOwner);
        // AG Ok
        owner = newOwner;
        // AG Ok
        newOwner = address(0);
    }
    // AG Ok
    function transferOwnershipImmediately(address _newOwner) public onlyOwner {
        // AG Ok
        emit OwnershipTransferred(owner, _newOwner);
        // AG Ok
        owner = _newOwner;
    }
}
```
