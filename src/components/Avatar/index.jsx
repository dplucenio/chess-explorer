import './style.scss'


function Avatar({src}) {
  return (
    <div className="Avatar">
      <img src={src} alt=""/>
    </div>
  );
}

export default Avatar;