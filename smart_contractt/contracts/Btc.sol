//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
 
contract Btc is ERC721, Ownable {
    constructor() ERC721("Bitcoin","BTC"){}

    function mint(address to, uint256 amount) public payable {
        _mint(to, amount);
    }

    receive() external payable{}

 

}


