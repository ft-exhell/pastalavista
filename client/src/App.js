import React, { useState, useEffect } from 'react';

import "./App.css";

const App = () => {
  const [account, setAccount] = useState(null);

  const connectWalet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0])
      setAccount(accounts[0])
    }
  }

  const renderNotConnected = () => (
    <div>
      <button onClick={connectWalet}>Connect Wallet</button>
    </div>
  )

  const renderConnected = () => (
    <div>
      <h3>Here are some pastas...</h3>
    </div>
  )

  return(
    <div>
      <h1>Pastapedia</h1>
      <h2>The meme dictionary of web3</h2>
      {!account && renderNotConnected()}
      {account && renderConnected()}
    </div>
  )
}

export default App;
