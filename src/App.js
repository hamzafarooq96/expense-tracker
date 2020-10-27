import React from 'react';
import Header from "./Header";
import Balance from "./Balance";
import AccountSummry from "./AccountSummry";
import AccountTrans from "./AccountTrans";
import AddTransaction from "./AddTransaction";
import './App.css';
import { GlobalProvider } from './GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <AccountSummry/>
      <AccountTrans/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
