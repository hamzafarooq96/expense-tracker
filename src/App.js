import React from 'react';
import Header from "./Header";
import Balance from "./Balance";
import AccountSummry from "./AccountSummry";
import AccountTrans from "./AccountTrans";
import AddTransaction from "./AddTransaction";
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <div className="container">
      <Balance/>
      <AccountSummry/>
      <AccountTrans/>
      <AddTransaction/>
    </div>
    </div>
  );
}

export default App;
