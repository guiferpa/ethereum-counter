import { ethers } from "hardhat";

async function main() {
  const counter = await ethers.deployContract("Counter", [], {});

  await counter.waitForDeployment();

  console.log(`Contract counter ${counter.target} deployed`);

  await counter.increment();
  await counter.increment();

  const value = await counter.show();

  console.log(value.toString());

  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
