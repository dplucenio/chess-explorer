import './style.scss'


function PlayerSearch() {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hi');
  }

  return (
    <div className='PlayerSearch'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" />
        <input type="button" value="Search" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default PlayerSearch;