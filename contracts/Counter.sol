// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Counter {
  uint value = 0;

  function increment() public {
    value = value + 1;
  }

  function decrement() public {
    value = value - 1;
  }

  function show() public view returns (uint) {
    return value;
  }
}
