# PriceFeedInterface

Source file [../contracts/PriceFeedInterface.sol](../contracts/PriceFeedInterface.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// PriceFeed Interface - _live is true if the rate is valid, false if invalid
// ----------------------------------------------------------------------------
// AG Ok
contract PriceFeedInterface {
    // AG Ok - returns uint for rate 
    function getRate() public view returns (uint _rate, bool _live);
}
```
