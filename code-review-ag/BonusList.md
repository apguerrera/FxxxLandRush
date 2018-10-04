# BonusList

Source file [../contracts/BonusList.sol](../contracts/BonusList.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// GazeCoin FxxxLandRush Bonus List
//
// Deployed to: 0x57D2F4B8F55A26DfE8Aba3c9f1c73CADbBc55C46
//
// Enjoy.
//
// (c) BokkyPooBah / Bok Consulting Pty Ltd for GazeCoin 2018. The MIT Licence.
// ----------------------------------------------------------------------------

// AG Ok
import "Operated.sol";
// AG Ok
import "BonusListInterface.sol";


// ----------------------------------------------------------------------------
// Bonus List - on list or not
// ----------------------------------------------------------------------------
// AG Ok
contract BonusList is BonusListInterface, Operated {
    // AG Ok
    mapping(address => bool) public bonusList;
    // AG Ok
    event AccountListed(address indexed account, bool status);
    // AG Ok
    constructor() public {
        // AG Ok - Sets owner
        initOperated(msg.sender);
    }
    // AG Ok
    function isInBonusList(address account) public view returns (bool) {
        // AG Ok
        return bonusList[account];
    }
    // AG Ok - Operator can add an array of accounts to the bonus list
    function add(address[] accounts) public onlyOperator {
        // AG Ok
        require(accounts.length != 0);
        // AG Ok
        for (uint i = 0; i < accounts.length; i++) {
            // AG Ok
            require(accounts[i] != address(0));
            // AG Ok
            if (!bonusList[accounts[i]]) {
                // AG Ok
                bonusList[accounts[i]] = true;
                // AG Ok
                emit AccountListed(accounts[i], true);
            }
        }
    }
    // AG Ok  - Operator can remove an array of accounts from the bonus list
    function remove(address[] accounts) public onlyOperator {
        // AG Ok
        require(accounts.length != 0);
        // AG Ok
        for (uint i = 0; i < accounts.length; i++) {
            // AG Ok
            require(accounts[i] != address(0));
            // AG Ok - Only deletes records on the bonus list
            if (bonusList[accounts[i]]) {
                // AG Ok
                delete bonusList[accounts[i]];
                // AG Ok 
                emit AccountListed(accounts[i], false);
            }
        }
    }
}
```
