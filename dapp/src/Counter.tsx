import React from "react";
import { Contract as EthersContract, BigNumber } from "ethers";

const abi = [
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "show",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export type Provider = any;

export type Account = string;

type CounterProps = {
  provider: Provider;
  accounts: Account[];
};

const Counter: React.FC<CounterProps> = (props) => {
  const { provider } = props;
  const address = "0x0A3AEfe77BA9c0Fe540899d17c9699Cf8F6e3aBc";
  const contract = new EthersContract(address, abi, provider.getSigner());

  const handleIncrement = async () => {
    await contract.increment();
    setCount(count + 1);
  };

  const handleDecrement = async () => {
    await contract.decrement();
    setCount(count - 1);
  };

  const handleShow = async () => {
    const value: BigNumber = await contract.show();
    setCount(value.toNumber());
  };

  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    handleShow();
  }, []);

  return (
    <div>
      <h1>Ethers.js and React Integration</h1>
      <h2>Counter: {count.toString()}</h2>
      {/* Your application code goes here */}
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          handleDecrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
