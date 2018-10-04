# MakerDAOPriceFeedAdaptor

Source file [../contracts/MakerDAOPriceFeedAdaptor.sol](../contracts/MakerDAOPriceFeedAdaptor.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// Adaptor to convert MakerDAO's "pip" price feed into BokkyPooBah's Pricefeed
//
// Used to convert MakerDAO ETH/USD pricefeed on the Ethereum mainnet at
//   https://etherscan.io/address/0x729D19f657BD0614b4985Cf1D82531c67569197B
// to be a slightly more useable form
//
// Deployed to: 0x12bc52A5a9cF8c1FfBAA2eAA82b75B3E79DfE292
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2018. The MIT Licence.
// ----------------------------------------------------------------------------

// AG Ok
import "PriceFeedInterface.sol";


// ----------------------------------------------------------------------------
// See https://github.com/bokkypoobah/MakerDAOSaiContractAudit/tree/master/audit#pip-and-pep-price-feeds
// ----------------------------------------------------------------------------
// AG Ok
contract MakerDAOPriceFeedInterface {
    // AG Ok
    function peek() public view returns (bytes32 _value, bool _hasValue);
}


// ----------------------------------------------------------------------------
// Pricefeed with interface compatible with MakerDAO's "pip" PriceFeed
// ----------------------------------------------------------------------------
// AG Ok
contract MakerDAOPriceFeedAdaptor is PriceFeedInterface {
  // AG Ok
    MakerDAOPriceFeedInterface public makerDAOPriceFeed;
    // AG Ok
    constructor(address _makerDAOPriceFeed) public {
        // AG Ok
        makerDAOPriceFeed = MakerDAOPriceFeedInterface(_makerDAOPriceFeed);
    }
    // AG Ok
    function getRate() public view returns (uint _rate, bool _live) {
        // AG Ok
        bytes32 value;
        // AG Ok
        (value, _live) = makerDAOPriceFeed.peek();
        // AG Ok
        _rate = uint(value);
    }
}
```
