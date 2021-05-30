import { useState } from "react";
import chessApi from '../../services/chessApi';
import { baseURL as countryFlagsBaseUrl } from '../../services/countryFlagsApi';
import axios from 'axios';
import './style.scss';
import Loader from "react-loader-spinner";

function SearchForm({ handleSuccessfulGet }) {

  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('idle');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const user = {};
  const handleSubmit = event => {
    setStatus('fetching')
    event.preventDefault();
    chessApi.get(`/player/${username}`)
      .then(response => {
        user.info = response.data;
        return chessApi.get(`/player/${username}/stats`)
      })
      .then(response => {
        user.stats = response.data;
        return user;
      })
      .then(user => {
        console.log(user);
        return axios.get(user.info.country);
      })
      .then(response => {
        let { code, name } = response.data;
        user.country = {
          code,
          name,
          flag: code === 'XX' ? null : `${countryFlagsBaseUrl}/${code}/flat/64.png`
        }
        return user;
      })
      .then(user => {
        handleSuccessfulGet(user);
        setStatus('idle');
      })
      .catch(error => {
        setStatus('idle');
      });
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        className="BaseInput"
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button
        className="BaseInput"
        onClick={handleSubmit}
        disabled={status === 'fetching'}>
        {status === 'idle'
          ? 'Search'
          : <Loader type="Grid" color="#FFF" height={`1.2rem`}
          />
        }

      </button>

    </form>
  );
}

export default SearchForm;