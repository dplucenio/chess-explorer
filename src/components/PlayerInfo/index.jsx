import './style.scss';

function PlayerInfo({ user }) {
  if (user == null) return <></>;
  return (
    <div className="PlayerInfo">
      <img src={user.avatar} alt="" />
      <h2>{user.username}</h2>
    </div>
  );
}

export default PlayerInfo;