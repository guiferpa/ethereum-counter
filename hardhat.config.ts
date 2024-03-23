import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: "https://public.stackup.sh/api/v1/node/polygon-mumbai",
      accounts: [`${vars.get("WALLET_PRIVATE_KEY")}`],
    },
  },
};

export default config;
