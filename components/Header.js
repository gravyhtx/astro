import { useRouter } from 'next/router';
import Link from 'next/link';
import NotificationBar from './NotificationBar';


const Header = ({ headerImg, notificationLink, notificationText, helpLink }) => {

  const router = useRouter();
  const path = router.pathname;

  const text = <>{notificationText}</>

  const help = helpLink ?
    <span className="info-icon" id="info-icon">
      <Link href={helpLink}><a>
      <i className="material-icons info-icon">info_outline</i>
      </a></Link>
    </span> : <></>
  
  const notification = notificationText ?
    <div id="notification-bar">
      <NotificationBar
        text={notificationText?text:""}
        link={notificationLink}
        ext={helpLink ? help : null}
        extLink={helpLink ? helpLink : null} />
    </div> : <></>
  
  return (
    <header className="site-header" id="site-header">
      <div className="navbar-container" id="header-container">
        <Link className="navbar-brand container" href="/" id="header-link-container">
          <div className="header-img-container disable-highlight" id="header-img-container">
            <div className={
              path === "/"
              ? "header-img animate__animated animate__fadeInDown"
              : "header-img" }>
              { headerImg ? headerImg : <></> }
            </div>
          </div>
        </Link>
        { notification }
      </div>
    </header>

  );
}

export default Header;