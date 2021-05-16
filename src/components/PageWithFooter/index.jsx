import GithubIcon from '../../components/GithubIcon'
import './style.scss'


function PageWithFooter({ children }) {
  return <div className="PageWithFooter">
    <div className="Main">
      {children}
    </div>
    <div className="Footer">
      <GithubIcon/>
      <a>See me on github!</a>
    </div>
  </div>
}

export default PageWithFooter;