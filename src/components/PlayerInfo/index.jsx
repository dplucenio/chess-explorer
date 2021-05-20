import './style.scss';

function PlayerInfo({ user }) {
  if (user == null) return <></>;
  console.log(user);
  return (
    <div className="PlayerInfo">
      <img src={user.info.avatar} alt="" />
      <h2>{user.info.username}</h2>
      <h2>{user.stats.chess_rapid.last.rating}</h2>
    </div>
  );
}

export default PlayerInfo;