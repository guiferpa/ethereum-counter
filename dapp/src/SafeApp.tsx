import React from "react";

import App from "./App";

type SafeAppProps = {};

const SafeApp: React.FC<SafeAppProps> = () => {
  if (typeof window.ethereum === "undefined") return null;

  return <App />;
};

export default SafeApp;
