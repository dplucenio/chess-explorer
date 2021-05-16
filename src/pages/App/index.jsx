import React from 'react';
import PlayerSearch from '../../components/PlayerSearch'
import PageWithFooter from '../../components/PageWithFooter';
import './style.scss'


export function App() {
  return (
    <PageWithFooter>
      <PlayerSearch />
    </PageWithFooter>
  );
}