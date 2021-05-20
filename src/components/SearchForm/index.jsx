import { useState } from "react";
import chessApi from '../../services/chessApi';

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