# PriceFeed

Source file [../contracts/PriceFeed.sol](../contracts/PriceFeed.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// BokkyPooBah's Pricefeed from a single source
//
// Deployed to: 0x695Bd54a75FA8e28183F9aF30063AD444ca0EBFc
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2018. The MIT Licence.
// ----------------------------------------------------------------------------

// AG Ok
import "Operated.sol";
// AG Ok
import "PriceFeedInterface.sol";


// ----------------------------------------------------------------------------
// Pricefeed from a single source
// ----------------------------------------------------------------------------
// AG Ok
contract PriceFeed is PriceFeedInterface, Operated {
    // AG Ok
    string public name;
    // AG Ok
    uint public rate;
    // AG Ok
    bool public live;
    // AG Ok - Event
    event SetRate(uint oldRate, bool oldLive, uint newRate, bool newLive);

    // AG Ok
    constructor(string _name, uint _rate, bool _live) public {
        // AG Ok - Sets owner
        initOperated(msg.sender);
        // AG Next 3 Ok
        name = _name;
        rate = _rate;
        live = _live;
        // AG Ok
        emit SetRate(0, false, rate, live);
    }
    // AG Ok
    function setRate(uint _rate, bool _live) public onlyOperator {
        // AG Next 2 Ok
        rate = _rate;
        live = _live;
        // AG - Need to move the event before variables are reassigned.
        emit SetRate(rate, live, _rate, _live);
    }
    // AG Ok
    function getRate() public view returns (uint _rate, bool _live) {
        // AG Ok
        return (rate, live);
    }
}
```
