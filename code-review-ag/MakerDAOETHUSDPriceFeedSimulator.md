# MakerDAOETHUSDPriceFeedSimulator

Source file [../contracts/MakerDAOETHUSDPriceFeedSimulator.sol](../contracts/MakerDAOETHUSDPriceFeedSimulator.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// BokkyPooBah's MakerDAO's "pip" PriceFeed Simulator for testing
//
// Used to simulate the MakerDAO ETH/USD pricefeed on the Ethereum mainnet at
//   https://etherscan.io/address/0x729D19f657BD0614b4985Cf1D82531c67569197B
//
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2018. The MIT Licence.
// ----------------------------------------------------------------------------

// AG Ok
import "Owned.sol";


// ----------------------------------------------------------------------------
// Pricefeed with interface compatible with MakerDAO's "pip" PriceFeed
// ----------------------------------------------------------------------------
// AG Ok
contract MakerDAOETHUSDPriceFeedSimulator is Owned {
    // AG Ok
    uint public value;
    // AG Ok
    bool public hasValue;
    // AG Ok - Event
    event SetValue(uint oldValue, bool oldHasValue, uint newValue, bool newHasValue);

    // AG Ok
    constructor(uint _value, bool _hasValue) public {
        // AG Ok - Set owner
        initOwned(msg.sender);
        // AG Ok
        value = _value;
        // AG Ok
        hasValue = _hasValue;
        // AG Ok
        emit SetValue(0, false, value, hasValue);
    }
    // AG Ok
    function setValue(uint _value, bool _hasValue) public onlyOwner {
        // AG Ok
        emit SetValue(value, hasValue, _value, _hasValue);
        // AG Ok
        value = _value;
        // AG Ok
        hasValue = _hasValue;
    }
    // AG Ok
    function peek() public view returns (bytes32 _value, bool _hasValue) {
        // AG Ok - Convert from uint to bytes32
        _value = bytes32(value);
        // AG Ok
        _hasValue = hasValue;
    }
}
```
