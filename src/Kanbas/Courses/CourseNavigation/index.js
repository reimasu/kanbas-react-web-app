import { Link, useParams, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function CourseNavigation() {
  const links = ["Home", "Modules","Piazza", "Zoom Meetings",
   "Assignments", "Quizzes", "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <ul className={`list-group-flush`} style={{ width: 200 }}>
      {links.map((link, index) => (
      <li className={`course-nav list-group-item`}> 
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item course-link ${pathname.includes(link) && `active`}`}>
          {link}
        </Link>
      </li>
      ))}
    </ul>
  );
}


export default CourseNavigation;