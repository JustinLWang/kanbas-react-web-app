import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaTelegram, FaComment, FaQuestion, FaFontAwesome} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "",   icon: <FaFontAwesome className="fs-2" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaTelegram className="fs-2" /> },
    { label: "Commons",  icon: <FaComment className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
        <Link to={`/Kanbas/${link.label}`} className={link.label === "Account" ? "account" : ""}>
            {link.icon} {link.label}
        </Link>
    </li>
))}

    </ul>
  );
}
export default KanbasNavigation;

