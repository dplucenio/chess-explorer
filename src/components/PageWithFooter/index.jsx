import GithubIcon from '../../components/GithubIcon'
import './style.scss'


function PageWithFooter({ children }) {
  return <div className="PageWithFooter">
    <div className="Main">
      {children}
    </div>
    <div className="Footer">
      <GithubIcon/>
      <a href="https://github.com/dplucenio/chess-explorer">See me on github!</a>
    </div>
  </div>
}

export default PageWithFooter;