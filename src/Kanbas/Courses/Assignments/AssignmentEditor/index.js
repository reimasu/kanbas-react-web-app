import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";
import './index.css';



function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  return (
    <div className="d-flex flex-column gap-3">
      <label for="assignmentName">Assignment Name</label>
      <input id="assignmentName" value={assignment.title}
             className="form-control mb-2"
             onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value}))}/>
      <textarea value={assignment.description} className="form-control"
              onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value}))}/>
      <div className="d-inline-flex gap-2 big-margin">
        <label for="points" className="col-form-label">Points</label>
        <input type="number" class="form-control" placeholder="100" />
      </div>
      <div className="d-inline-flex gap-2 big-margin">
        <label for="assign" className="col-form-label">Points</label>
        <div className="form-control">
          <label for="dueDate">Due</label>
          <div className="input-group">
            <input type="date" class="form-control" id="dueDate" value={assignment.dueDate} aria-describedby="basic-addon2"
            onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value}))}/>
          </div>
          <div className="row">
            <label className="col" for="dueDate">Available from</label>
            <label className="col" for="dueDate">Until</label>
          </div>
          <div className="row">
            <div className="input-group col">
              <input type="date" class="form-control" id="dueDate" value={assignment.availableFromDate} aria-describedby="basic-addon2"
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value}))}/>
            </div>
            <div className="input-group col">
              <input type="date" class="form-control" id="dueDate" value={assignment.availableUntilDate} aria-describedby="basic-addon2"
              onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value}))}/>
            </div>
          </div>
        </div>
      </div>
      <div className="row gap-3 big-margin justify-content-end w-25">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="col btn btn-secondary">
          Cancel
        </Link>
        <button onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))} className="col btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;