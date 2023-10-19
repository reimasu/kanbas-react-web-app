import { Link } from "react-router-dom";
import db from "../Database";
import Pink1 from "../Images/pink1.png"
import Pink2 from "../Images/pink2.png"
import Pink3 from "../Images/pink3.png"
import Pink4 from "../Images/pink4.png"
import { faEllipsisVertical, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Dashboard() {
  const courses = db.courses;
  const cardImages = [Pink1, Pink2, Pink3, Pink4];
  const courseTitles = ["course-title-1", "course-title-2", "course-title-3", "course-title-4"];
  const cardTitles = ["card-title-1", "card-title-2", "card-title-3", "card-title-4"];
  
  return (
      <div className={`d-flex dashboard-section flex-column`}>
            {/* <!-- title with line underneath --> */}
            <h3>Dashboard</h3>
            <hr/>
            <div className={`d-flex flex-column published-courses`}>
                {/* <!-- published courses title with line underneath --> */}
                <h2>Published Courses</h2>
                <hr/>
                {/* <!-- course card grid --> */}
                <div className={`card-grid`}>
                    {courses.map((course, index) => (
                    <div className={`card shadow-sm`}>
                        <div className={`bg-image`}>
                            <img src={cardImages[index]} className={`card-img-top`}/>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={`ellipsis-icon top-0 end-0 fa-xl`}></FontAwesomeIcon>
                        </div>
                        <Link key={index} to={`/Kanbas/courses/${course._id}`}> 
                            <div className={`card-body`}>
                              <h5 key={course._id} 
                              className={cardTitles[index]}>
                                {course.number} {course.name}</h5>
                              <h4 className={courseTitles[index]}>{course.number}</h4>
                              <p className={`card-text`}>{course.startDate} to {course.endDate}</p>
                              <FontAwesomeIcon icon={faNoteSticky} className={`fa-xl`}></FontAwesomeIcon>
                            </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
}
export default Dashboard;