import Avatar from '../Avatar'
import './style.scss';
import AvatarWithFlag from '../AvatarWithFlag';
import chessAvatar from '../../resources/chessAvatar.png'

function PlayerInfo({ user }) {
  if (user == null) return <></>;
  console.log(user);
  return (
    <div className="PlayerInfo">
      <AvatarWithFlag
        avatar={user.info.avatar || chessAvatar}
        flag={user.country.flag}
      />
      <div className="InnerContainer">
        <h2>{user.info.username}</h2>
        {user.stats.chess_rapid && <h2>{user.stats.chess_rapid.last.rating}</h2>}
      </div>
    </div>
  );
}

export default PlayerInfo;