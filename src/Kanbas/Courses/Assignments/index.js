import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { faEllipsisVertical, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="list-group">
        <button type="button" class="list-group-item list-group-item-secondary text-start module">
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex">
                    <FontAwesomeIcon icon={faGripVertical} class="grip-vertical"></FontAwesomeIcon>
                    <h4>Assignments</h4>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} class="ellipsis-vertical"></FontAwesomeIcon>
            </div>
        </button>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item d-flex justify-content-between list-group-item list-group-item-action module green-border">
            <h3>{assignment.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;