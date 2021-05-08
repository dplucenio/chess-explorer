import React from 'react';
import { PlayerList } from './components/PlayerList';
import './styles/global.scss'


export function App() {
  return (
    <div id="App">
      <h1>App</h1>
      <PlayerList />
    </div>
  );
}