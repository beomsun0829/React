import React from 'react';
import './App.css';
import { Wallet } from './Wallet';
import { SendOneLamportToRandomAddress } from './Testapp';
import Header from './components/Header';
import Maintitle from './components/Maintitle';
import Wallet_Mintingbox from './components/Wallet_Mintingbox';
import Minted_bar from './components/Minted_bar';
import Steaking from './components/Steaking';
import Stake_heist from './components/Stake_heist';
import Stake_SWAT from './components/Stake_SWAT';



function App() {
  return (
    <div className="App">
      <Header/>
      <Maintitle/>
      <Wallet_Mintingbox/>
      <Minted_bar/>
      <Steaking/>
      <Stake_heist/>
      <Stake_SWAT/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
