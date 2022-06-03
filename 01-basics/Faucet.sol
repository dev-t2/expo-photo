// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    function withdraw(uint256 withdraw_amount) public payable {
        require(withdraw_amount <= 100000000000000000);

        payable(msg.sender).transfer(withdraw_amount);
    }

    receive() external payable {}
}
