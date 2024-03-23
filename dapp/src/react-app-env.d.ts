/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_COUNTER_CONTRACT_ABI: string;
      REACT_APP_COUNTER_CONTRACT_ADDRESS: string;
    }
  }

  interface Window {
    ethereum: any;
  }
}

export {};
