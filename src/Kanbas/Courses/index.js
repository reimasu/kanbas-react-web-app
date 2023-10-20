import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';
function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className={`d-flex flex-column`}>
      <nav className="m-3" id="wd-breadcrumb1" style={{ "--bs-breadcrumb-divider": "'>'" }}
             aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">{course.name}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{courseId}</li>
            </ol>
        </nav>
        <hr />
      <div className="d-flex flex-row">
      <CourseNavigation />
      <div className={`d-flex flex-column full-width`}>
        <div
          className="bottom-0 end-0"
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Courses;