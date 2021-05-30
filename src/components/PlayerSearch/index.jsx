import { useState } from 'react';
import PlayerInfo from '../PlayerInfo';
import PopContainer from '../PopContainer';
import SearchForm from '../SearchForm';
import './style.scss'


function PlayerSearch() {

  const [user, setUser] = useState(null);

  function handleSuccessfulGet(userData) {
    setUser(userData);
    console.log(userData);
  }

  return (
    <div className='PlayerSearch'>

      <SearchForm handleSuccessfulGet = {handleSuccessfulGet}/>
      <PopContainer timeout={0} visible={user!=null}>
        <PlayerInfo user={user}/>
      </PopContainer>
    </div>
  )
}

export default PlayerSearch;