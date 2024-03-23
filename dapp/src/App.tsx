import React from "react";
import { ethers } from "ethers";

import Counter from "./Counter";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const [provider, setProvider] = React.useState<any>(null);
  const [accounts, setAccounts] = React.useState<string[]>([]);

  React.useEffect(() => {
    const initializeProvider = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const accounts = await provider.send("eth_requestAccounts", []);
        setAccounts(accounts);

        console.log(accounts);
      } catch (err) {
        console.log(err);
      }
    };

    initializeProvider();
  }, []);

  if (accounts.length === 0) return null;
  if (provider === null) return null;

  return <Counter provider={provider} accounts={accounts} />;
};

export default App;
