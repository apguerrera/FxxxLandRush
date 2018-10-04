# SafeMath

Source file [../contracts/SafeMath.sol](../contracts/SafeMath.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// Safe maths
// ----------------------------------------------------------------------------
// AG Ok
library SafeMath {
    // AG Ok
    function add(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        c = a + b;
        // AG Ok
        require(c >= a);
    }
    // AG Ok
    function sub(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        require(b <= a);
        // AG Ok
        c = a - b;
    }
    // AG Ok
    function mul(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        c = a * b;
        // AG Ok
        require(a == 0 || c / a == b);
    }
    // AG Ok
    function div(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        require(b > 0);
        // AG Ok
        c = a / b;
    }
    // AG Ok
    function max(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        c = a >= b ? a : b;
    }
    // AG Ok
    function min(uint a, uint b) internal pure returns (uint c) {
        // AG Ok
        c = a <= b ? a : b;
    }
}
```
