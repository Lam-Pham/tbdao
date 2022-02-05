import { useEffect, useMemo, useState} from "react";

import { useWeb3 } from "3rdweb/hooks";

const App = () => {

  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  return (
    <div className="landing">
      <h1>Welcome to My DAO</h1>
    </div>
  );
};

export default App;
