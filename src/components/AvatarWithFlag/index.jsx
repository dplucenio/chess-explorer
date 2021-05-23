import './style.scss'
import Avatar from '../Avatar';

function AvatarWithFlag({ avatar, flag }) {
  console.log(flag);
  return (
    <div className="AvatarWithFlag">
      <Avatar src={avatar} />
      <div className="FlagBorder">
        {
          flag == null
            ? null
            : <div className="FlagContainer"
              style={{ backgroundImage: `url(${flag})` }} />
        }

      </div>

    </div>
  );
}

export default AvatarWithFlag;