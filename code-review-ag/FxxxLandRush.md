# FxxxLandRush

Source file [../contracts/FxxxLandRush.sol](../contracts/FxxxLandRush.sol).

<br />

<hr />

```solidity
pragma solidity ^0.4.25;

// ----------------------------------------------------------------------------
// Fxxx Land Rush Contract - Purchase land parcels with GZE and ETH
//
// Deployed to : {TBA}
//
// Enjoy.
//
// (c) BokkyPooBah / Bok Consulting Pty Ltd for GazeCoin 2018. The MIT Licence.
// ----------------------------------------------------------------------------

// AG Ok - Next 5 imports
import "Owned.sol";
import "SafeMath.sol";
import "BTTSTokenInterface110.sol";
import "PriceFeedInterface.sol";
import "BonusListInterface.sol";


// ----------------------------------------------------------------------------
// FxxxLandRush Contract
// ----------------------------------------------------------------------------
// AG Ok
contract FxxxLandRush is Owned, ApproveAndCallFallBack {
    // AG Ok
    using SafeMath for uint;
    // AG Ok
    uint private constant TENPOW18 = 10 ** 18;
    // AG Ok - Next 2
    BTTSTokenInterface public parcelToken;
    BTTSTokenInterface public gzeToken;
    // AG Ok - Next 2
    PriceFeedInterface public ethUsdPriceFeed;
    PriceFeedInterface public gzeEthPriceFeed;
    // AG Ok
    BonusListInterface public bonusList;

    // AG Ok - Next 8
    address public wallet;
    uint public startDate;
    uint public endDate;
    uint public maxParcels;
    uint public parcelUsd;                  // USD per parcel, e.g., USD 1,500 * 10^18
    uint public usdLockAccountThreshold;    // e.g., USD 7,000 * 10^18
    uint public gzeBonusOffList;            // e.g., 20 = 20% bonus
    uint public gzeBonusOnList;             // e.g., 30 = 30% bonus
    // AG Ok - Next 4
    uint public parcelsSold;
    uint public contributedGze;
    uint public contributedEth;
    bool public finalised;

    // AG Ok - Next 9 events
    event WalletUpdated(address indexed oldWallet, address indexed newWallet);
    event StartDateUpdated(uint oldStartDate, uint newStartDate);
    event EndDateUpdated(uint oldEndDate, uint newEndDate);
    event MaxParcelsUpdated(uint oldMaxParcels, uint newMaxParcels);
    event ParcelUsdUpdated(uint oldParcelUsd, uint newParcelUsd);
    event UsdLockAccountThresholdUpdated(uint oldUsdLockAccountThreshold, uint newUsdLockAccountThreshold);
    event GzeBonusOffListUpdated(uint oldGzeBonusOffList, uint newGzeBonusOffList);
    event GzeBonusOnListUpdated(uint oldGzeBonusOnList, uint newGzeBonusOnList);
    event Purchased(address indexed addr, uint parcels, uint gzeToTransfer, uint ethToTransfer, uint parcelsSold, uint contributedGze, uint contributedEth, bool lockAccount);

    // AG Ok
    constructor(address _parcelToken, address _gzeToken, address _ethUsdPriceFeed, address _gzeEthPriceFeed, address _bonusList, address _wallet, uint _startDate, uint _endDate, uint _maxParcels, uint _parcelUsd, uint _usdLockAccountThreshold, uint _gzeBonusOffList, uint _gzeBonusOnList) public {
        // AG Ok
        require(_parcelToken != address(0) && _gzeToken != address(0));
        // AG Ok
        require(_ethUsdPriceFeed != address(0) && _gzeEthPriceFeed != address(0) && _bonusList != address(0));
        // AG Ok
        require(_wallet != address(0));
        // AG Ok
        require(_startDate >= now && _endDate > _startDate);
        // AG Ok
        require(_maxParcels > 0 && _parcelUsd > 0);
        // AG Ok - Set owner
        initOwned(msg.sender);
        // AG Ok - Next 5 set interfaces
        parcelToken = BTTSTokenInterface(_parcelToken);
        gzeToken = BTTSTokenInterface(_gzeToken);
        ethUsdPriceFeed = PriceFeedInterface(_ethUsdPriceFeed);
        gzeEthPriceFeed = PriceFeedInterface(_gzeEthPriceFeed);
        bonusList = BonusListInterface(_bonusList);
        // AG Ok - Next 8
        wallet = _wallet;
        startDate = _startDate;
        endDate = _endDate;
        maxParcels = _maxParcels;
        parcelUsd = _parcelUsd;
        usdLockAccountThreshold = _usdLockAccountThreshold;
        gzeBonusOffList = _gzeBonusOffList;
        gzeBonusOnList = _gzeBonusOnList;
    }
    // AG Ok - Only owner
    function setWallet(address _wallet) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        require(_wallet != address(0));
        // AG Ok
        emit WalletUpdated(wallet, _wallet);
        // AG Ok
        wallet = _wallet;
    }
    // AG Ok - Be mindful it is possible for owner to set a startDate later than an endDate
    function setStartDate(uint _startDate) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        require(_startDate >= now);
        // AG Ok
        emit StartDateUpdated(startDate, _startDate);
        // AG Ok
        startDate = _startDate;
    }
    // AG Ok - Only owner
    function setEndDate(uint _endDate) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        require(_endDate > startDate);
        // AG Ok
        emit EndDateUpdated(endDate, _endDate);
        // AG Ok
        endDate = _endDate;
    }
    // AG Ok - Only owner
    function setMaxParcels(uint _maxParcels) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok - Can set maxParcels to parcelSold to end allocation
        require(_maxParcels >= parcelsSold);
        // AG Ok
        emit MaxParcelsUpdated(maxParcels, _maxParcels);
        // AG Ok
        maxParcels = _maxParcels;
    }
    // AG Ok - Only owner
    function setParcelUsd(uint _parcelUsd) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        require(_parcelUsd > 0);
        // AG Ok
        emit ParcelUsdUpdated(parcelUsd, _parcelUsd);
        // AG Ok
        parcelUsd = _parcelUsd;
    }
    // AG Ok - Only owner
    function setUsdLockAccountThreshold(uint _usdLockAccountThreshold) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        emit UsdLockAccountThresholdUpdated(usdLockAccountThreshold, _usdLockAccountThreshold);
        // AG Ok
        usdLockAccountThreshold = _usdLockAccountThreshold;
    }
    // AG Ok - Only owner
    function setGzeBonusOffList(uint _gzeBonusOffList) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        emit GzeBonusOffListUpdated(gzeBonusOffList, _gzeBonusOffList);
        // AG Ok
        gzeBonusOffList = _gzeBonusOffList;
    }
    // AG Ok - Only owner
    function setGzeBonusOnList(uint _gzeBonusOnList) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        emit GzeBonusOnListUpdated(gzeBonusOnList, _gzeBonusOnList);
        // AG Ok
        gzeBonusOnList = _gzeBonusOnList;
    }
    // AG Ok
    function symbol() public view returns (string _symbol) {
        // AG Ok
        _symbol = parcelToken.symbol();
    }
    // AG Ok
    function name() public view returns (string _name) {
        // AG Ok
        _name = parcelToken.name();
    }

    // USD per ETH, e.g., 221.99 * 10^18
    // AG Ok - Public view
    function ethUsd() public view returns (uint _rate, bool _live) {
        // AG OK - Returns (uint _rate, bool _live)
        return ethUsdPriceFeed.getRate();
    }
    // ETH per GZE, e.g., 0.00004366 * 10^18
    // AG Ok - Public view
    function gzeEth() public view returns (uint _rate, bool _live) {
         // AG Ok - Returns (uint _rate, bool _live)
        return gzeEthPriceFeed.getRate();
    }
    // USD per GZE, e.g., 0.0096920834 * 10^18
    // AG Ok - Public view
    function gzeUsd() public view returns (uint _rate, bool _live) {
        // AG Ok - Next 2
        uint _ethUsd;
        bool _ethUsdLive;
        // AG Ok - Returns (uint _rate, bool _live)
        (_ethUsd, _ethUsdLive) = ethUsdPriceFeed.getRate();
        // AG Ok - Next 2
        uint _gzeEth;
        bool _gzeEthLive;
        // AG Ok - Returns (uint _rate, bool _live)
        (_gzeEth, _gzeEthLive) = gzeEthPriceFeed.getRate();
        // AG Ok
        if (_ethUsdLive && _gzeEthLive) {
            // AG Ok
            _live = true;
            // AG Ok - (221.99 * 10^18) * (0.00004366 * 10^18) / 10^18 = 0.0096920834 * 10^18
            _rate = _ethUsd.mul(_gzeEth).div(TENPOW18);
        }
    }
    // ETH per parcel, e.g., 6.757061128879679264 * 10^18  // AG  - 6.7 ETH per parcel, 6.75 * 10^18 wei
    // AG Ok - Public view
    function parcelEth() public view returns (uint _rate, bool _live) {
        // AG Ok
        uint _ethUsd;
        // AG Ok
        (_ethUsd, _live) = ethUsd();
        // AG Ok
        if (_live) {
            // AG Ok - (1500 * 10^18) * 10^18 / (221.99 * 10^18) = 6.75706 * 10^18 wei = 6.75706 ETH per parcel
            _rate = parcelUsd.mul(TENPOW18).div(_ethUsd);
        }
    }
    // GZE per parcel, without bonus, e.g., 154765.486231783766945298 * 10^18
    // AG Ok
    function parcelGzeWithoutBonus() public view returns (uint _rate, bool _live) {
        // AG Ok
        uint _gzeUsd;
        // AG Ok - Returns (uint _rate, bool _live)
        (_gzeUsd, _live) = gzeUsd();
        // AG Ok
        if (_live) {
            // AG Ok - (1500 * 10^18) * 10^18 / (0.0096920834 * 10^18) = 154765.4862 * 10^18 GZE per parcel
            _rate = parcelUsd.mul(TENPOW18).div(_gzeUsd);
        }
    }
    // GZE per parcel, with bonus but not on bonus list, e.g., 128971.238526486472454415 * 10^18
    // AG Ok
    function parcelGzeWithBonusOffList() public view returns (uint _rate, bool _live) {
        // AG Ok
        uint _parcelGzeWithoutBonus;
        // AG Ok
        (_parcelGzeWithoutBonus, _live) = parcelGzeWithoutBonus();
        // AG Ok
        if (_live) {
            // AG Ok - 1.2 * rate = parcelGzeWithoutBonus
            // AG Ok - rate = (154765.4862 * 10^18) * 100 / (100 + 20) = 128971.2385 * 10^18 GZE per parcel
            _rate = _parcelGzeWithoutBonus.mul(100).div(gzeBonusOffList.add(100));
        }
    }
    // GZE per parcel, with bonus and on bonus list, e.g., 119050.374024449051496383 * 10^18
    // AG Ok
    function parcelGzeWithBonusOnList() public view returns (uint _rate, bool _live) {
        // AG Ok
        uint _parcelGzeWithoutBonus;
        // AG Ok
        (_parcelGzeWithoutBonus, _live) = parcelGzeWithoutBonus();
        // AG Ok
        if (_live) {
            // AG Ok - 1.2 * rate = parcelGzeWithoutBonus
            // AG Ok - rate = (154765.4862 * 10^18) * 100 / (100 + 30) = 119050.3740 * 10^18 GZE per parcel
            _rate = _parcelGzeWithoutBonus.mul(100).div(gzeBonusOnList.add(100));
        }
    }

    // Account contributes by:
    // 1. calling GZE.approve(landRushAddress, tokens)
    // 2. calling this.purchaseWithGze(tokens)
    // AG Ok
    function purchaseWithGze(uint256 tokens) public {
        // AG Ok - Requires this address to be approved to transfer tokens
        require(gzeToken.allowance(msg.sender, this) >= tokens);
        // AG Ok - Call funtion below
        receiveApproval(msg.sender, tokens, gzeToken, "");
    }
    // Account contributes by calling GZE.approveAndCall(landRushAddress, tokens, "")
    // AG Ok
    function receiveApproval(address from, uint256 tokens, address token, bytes /* data */) public {
        // AG Ok
        require(now >= startDate && now <= endDate);
        // AG Ok - Ensure the approve and call came from the GZE contract
        require(token == address(gzeToken));
        // AG Ok
        uint _parcelGze;
        // AG Ok
        bool _live;
        // AG Ok
        if (bonusList.isInBonusList(from)) {
            // AG Ok - returns (uint _rate, bool _live)
            (_parcelGze, _live) = parcelGzeWithBonusOnList();
        // AG Ok
        } else {
            // AG Ok - returns (uint _rate, bool _live)
            (_parcelGze, _live) = parcelGzeWithBonusOffList();
        }
        // AG Ok
        require(_live);
        // AG Ok
        uint parcels = tokens.div(_parcelGze);
        // AG Ok
        if (parcelsSold.add(parcels) >= maxParcels) {
            // AG Ok - Round down to maxParcels
            parcels = maxParcels.sub(parcelsSold);
        }
        // AG Ok
        uint gzeToTransfer = parcels.mul(_parcelGze);
        // AG Ok
        contributedGze = contributedGze.add(gzeToTransfer);
        // AG Ok - returns true on successful transferFrom
        require(ERC20Interface(token).transferFrom(from, wallet, gzeToTransfer));
        // AG Ok - returns lock for tokens above USD threshold
        bool lock = mintParcelTokens(from, parcels);
        // AG Ok - Event
        emit Purchased(from, parcels, gzeToTransfer, 0, parcelsSold, contributedGze, contributedEth, lock);
    }
    // Account contributes by sending ETH
    // AG Ok
    function () public payable {
        // AG Ok - Might want to include a return error for users
        require(now >= startDate && now <= endDate);
        // AG Ok - Next 2
        uint _parcelEth;
        bool _live;
        // AG Ok - returns (uint _rate, bool _live)
        (_parcelEth, _live) = parcelEth();
        // AG Ok - Might want to include a return error for users
        require(_live);
        // AG Ok
        uint parcels = msg.value.div(_parcelEth);
        // AG Ok
        if (parcelsSold.add(parcels) >= maxParcels) {
            // AG Ok - Round down to maxParcels
            parcels = maxParcels.sub(parcelsSold);
        }
        // AG Ok - round ETH to the nearest parcel amount
        // AG might want to add a require(parcels>0); or an if statement
        uint ethToTransfer = parcels.mul(_parcelEth);
        // AG Ok
        contributedEth = contributedEth.add(ethToTransfer);
        // AG Ok
        uint ethToRefund = msg.value.sub(ethToTransfer);
        // AG Ok
        if (ethToRefund > 0) {
            // AG Ok
            msg.sender.transfer(ethToRefund);
        }
        // AG Ok
        bool lock = mintParcelTokens(msg.sender, parcels);
        // AG Ok - Event
        emit Purchased(msg.sender, parcels, 0, ethToTransfer, parcelsSold, contributedGze, contributedEth, lock);
    }
    // Contract owner allocates parcels to tokenOwner for offline purchase
    // AG Ok
    function offlinePurchase(address tokenOwner, uint parcels) public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        if (parcelsSold.add(parcels) >= maxParcels) {
            // AG Ok
            parcels = maxParcels.sub(parcelsSold);
        }
        // AG Ok
        bool lock = mintParcelTokens(tokenOwner, parcels);
        // AG Ok
        emit Purchased(tokenOwner, parcels, 0, 0, parcelsSold, contributedGze, contributedEth, lock);
    }
    // Internal function to mint tokens and disable minting if maxParcels sold
    // AG Ok
    function mintParcelTokens(address account, uint parcels) internal returns (bool _lock) {
        // AG Ok
        require(parcels > 0);
        // AG Ok
        parcelsSold = parcelsSold.add(parcels);
        // AG Ok - Set bool to true for locking accounts above USD threshold
        _lock = parcelToken.balanceOf(account).add(parcelUsd.mul(parcels)) >= usdLockAccountThreshold;
        // AG
        require(parcelToken.mint(account, parcelUsd.mul(parcels), _lock));
        // AG OK
        if (parcelsSold >= maxParcels) {
            // AG Ok - End parcel allocation early
            parcelToken.disableMinting();
            // AG Ok
            finalised = true;
        }
    }
    // Contract owner finalises to disable parcel minting
    // AG Ok
    function finalise() public onlyOwner {
        // AG Ok
        require(!finalised);
        // AG Ok
        require(now > endDate || parcelsSold >= maxParcels);
        // AG Ok
        parcelToken.disableMinting();
        // AG Ok - Ends minting, offline purchases and changing owned variables
        finalised = true;
    }
}

```
