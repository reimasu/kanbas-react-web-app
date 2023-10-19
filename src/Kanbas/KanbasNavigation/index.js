import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NULogo from '../Images/NULogo.png'
import { faUserCircle, faGauge, faBook, faCalendar, faInbox, faClock, faTv, faCircleQuestion, faCircle} from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faUserCircle, faGauge, faBook, faCalendar, faInbox, faClock, faTv, faCreativeCommons, faCircleQuestion]
  const { pathname } = useLocation();
  return (
    <div className={`d-md-none d-lg-block b-sidebar b-nav`}>
      <a href="/" className={`d-block p-3 link-body-emphasis text-decoration-none link-padding`}>
        <img src={NULogo} width={"50px"}/>
      </a>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item nav-item d-flex flex-column justify-content-center ${pathname.includes(link) && "active"}`}>
            <FontAwesomeIcon icon={icons[index]} 
            className={`fa-xl my-3 red-icons`}>
        </FontAwesomeIcon>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;