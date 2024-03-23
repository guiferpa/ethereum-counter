import { ethers } from "hardhat";
import { expect } from "chai";

const deploy = async () => {
  const counter = await ethers.deployContract("Counter");
  await counter.waitForDeployment();
  return counter;
};

describe("Counter", function () {
  it("Should increment 2 times then returns value equals 2", async function () {
    const counter = await deploy();
    await counter.increment();
    await counter.increment();
    const got = await counter.show();
    expect(got).to.equal(2);
  });
});
