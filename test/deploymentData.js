var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var dexOperator="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var user1="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var user2="0xa44a08d3f6933c69212114bb66e2df1813651844";
var user3="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var user4="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
var user5="0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec";
var user6="0xa88a05d2b88283ce84c8325760b72a64591279a2";
var feeAccount="0xa99a0ae3354c06b1459fd441a32a3f71005d7da0";
var bttsLibAddress="0xf3d9d349146b55cf4e0b622edc71bc4af76b014c";
var bttsLibAbi=[{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApprove","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferFromCheck","outputs":[{"name":"result","type":"BTTSTokenInterface.CheckResult"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signedApproveAndCallSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"owner","type":"address"},{"name":"symbol","type":"string"},{"name":"name","type":"string"},{"name":"decimals","type":"uint8"},{"name":"initialSupply","type":"uint256"},{"name":"mintable","type":"bool"},{"name":"transferable","type":"bool"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedApproveHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"minter","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"signedTransferSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"BTTSLib.Data storage"},{"name":"spender","type":"address"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedTransferFromHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedTransferHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bttsVersion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"}],"name":"enableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"tokens","type":"uint256"},{"name":"lockAccount","type":"bool"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"signedApproveSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"}],"name":"unlockAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveCheck","outputs":[{"name":"result","type":"BTTSTokenInterface.CheckResult"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"signedTransferFromSig","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"BTTSLib.Data storage"},{"name":"result","type":"BTTSTokenInterface.CheckResult"}],"name":"getCheckResultMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"sig","type":"bytes"}],"name":"ecrecoverFromSig","outputs":[{"name":"recoveredAddress","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveAndCallCheck","outputs":[{"name":"result","type":"BTTSTokenInterface.CheckResult"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signingPrefix","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"}],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"signedApproveAndCallHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedTransferCheck","outputs":[{"name":"result","type":"BTTSTokenInterface.CheckResult"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"},{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"},{"name":"fee","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"sig","type":"bytes"},{"name":"feeAccount","type":"address"}],"name":"signedApproveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BTTSLib.Data storage"}],"name":"disableMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"}],"name":"MinterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"},{"indexed":false,"name":"lockAccount","type":"bool"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintingDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"TransfersEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"}],"name":"AccountUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];
var bttsLib=eth.contract(bttsLibAbi).at(bttsLibAddress);
var bttsFactoryAddress="0xb797d2439cd318684f93de852b4928ea75ae6917";
var bttsFactoryAbi=[{"constant":false,"inputs":[{"name":"symbol","type":"string"},{"name":"name","type":"string"},{"name":"decimals","type":"uint8"},{"name":"initialSupply","type":"uint256"},{"name":"mintable","type":"bool"},{"name":"transferable","type":"bool"}],"name":"deployBTTSTokenContract","outputs":[{"name":"bttsTokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfDeployedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenContract","type":"address"}],"name":"verify","outputs":[{"name":"valid","type":"bool"},{"name":"owner","type":"address"},{"name":"decimals","type":"uint256"},{"name":"mintable","type":"bool"},{"name":"transferable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"bttsTokenAddress","type":"address"},{"indexed":false,"name":"symbol","type":"string"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"decimals","type":"uint8"},{"indexed":false,"name":"initialSupply","type":"uint256"},{"indexed":false,"name":"mintable","type":"bool"},{"indexed":false,"name":"transferable","type":"bool"}],"name":"BTTSTokenListing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
var bttsFactory=eth.contract(bttsFactoryAbi).at(bttsFactoryAddress);
