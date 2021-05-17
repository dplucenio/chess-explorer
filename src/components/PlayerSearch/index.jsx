import { useState } from 'react';
import chessApi from '../../services/chessApi';
import PlayerInfo from '../PlayerInfo';
import './style.scss'


function PlayerSearch() {

  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    chessApi.get(`/player/${username}`)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <div className='PlayerSearch'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input type="button" value="Search" onClick={handleSubmit} />
      </form>

      <PlayerInfo />
    </div>
  )
}

export default PlayerSearch;