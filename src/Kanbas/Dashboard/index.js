import { React, useState } from "react";
import { Link } from "react-router-dom";
import Pink1 from "../Images/pink1.png"
import Pink2 from "../Images/pink2.png"
import Pink3 from "../Images/pink3.png"
import Pink4 from "../Images/pink4.png"
import { faEllipsisVertical, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  const cardImages = [Pink1, Pink2, Pink3, Pink4, Pink1, Pink2, Pink4, Pink4];
  const courseTitles = ["course-title-1", "course-title-2", "course-title-3", "course-title-4"];
  const cardTitles = ["card-title-1", "card-title-2", "card-title-3", "card-title-4"];

  return (
      <div className="d-flex dashboard-section flex-column">
            {/* <!-- title with line underneath --> */}
            <h3>Dashboard</h3>
            <hr/>
            <div className="d-flex flex-column published-courses">
                {/* <!-- published courses title with line underneath --> */}
                <h2>Published Courses</h2>
                <hr/>
                <div class="input-group flex-nowrap pt-1 pb-3">
                  <input value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                  <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                  <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                  <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                  <button type="button" class="btn btn-success" onClick={addNewCourse}>Add</button>
                  <button type="button" class="btn btn-primary" onClick={updateCourse}>Update</button>
                </div>
                <div className="card-grid">
                    {courses.map((course, index) => (
                    <div className="card shadow-sm">
                        <div className="bg-image">
                            <img src={cardImages[index]} className="card-img-top"/>
                            <FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis-icon top-0 end-0 fa-xl"></FontAwesomeIcon>
                        </div>
                        <Link key={course._id} to={`/Kanbas/courses/${course._id.$oid}`}> 
                            <div className="card-body">
                              <h5 className={cardTitles[index]}>
                                {course.number} {course.name}</h5>
                              <h4 className={courseTitles[index]}>{course.number}</h4>
                              <p className="card-text">{course.startDate} to {course.endDate}</p>
                            </div>
                            <div className="card-body dashboard-buttons">
                                <button type="button" class="btn btn-warning me-2"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}>Edit</button>
                                <button type="button" class="btn btn-danger"
                                onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }}>Delete</button>
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