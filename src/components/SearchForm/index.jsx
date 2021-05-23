import { useState } from "react";
import chessApi from '../../services/chessApi';
import { baseURL as countryFlagsBaseUrl } from '../../services/countryFlagsApi';
import axios from 'axios';
import './style.scss';

function SearchForm({ handleSuccessfulGet }) {

  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const user = {};
  const handleSubmit = event => {
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
      })
      .catch(error => console.log(error));
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input type="button" value="Search" onClick={handleSubmit} />
    </form>
  );
}

export default SearchForm;