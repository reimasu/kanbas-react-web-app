import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { faEllipsisVertical, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
import { createAssignment, findAssignmentsForCourse } from "./client";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(selectAssignment(assignments))
    );
  }, [courseId]);



  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div>
      {/* buttons */}
      <div className="d-flex justify-content-between">
        <input type="text" class="form-control w-50" placeholder="Search for Assignment"/>
        <div className="d-inline-flex gap-2">
          <button type="button" class="btn btn-secondary">Group</button>
          <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
          <button type="button" class="btn btn-danger">+Assignment</button>
          </Link>
        </div>
      </div>
      <hr/>
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
        {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id.$oid}`}
            className="list-group-item  list-group-item list-group-item-action module green-border">
              <div className="d-flex flex-row justify-content-between">
                <div className="me-5">
                  <h3>{assignment.title}</h3>
                  <p>{assignment.description}</p>
                  <p>Due Date: {assignment.dueDate}</p>
                  <p>Available from: {assignment.availableFromDate} Until: {assignment.availableUntilDate}</p>
                </div>
                <button type="button" className="btn btn-danger"
                onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>     
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;