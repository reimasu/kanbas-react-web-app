import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ModuleList.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="module-section">
      <li className="d-flex column-gap-3 list-group-item">
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <div className="d-inline-flex gap-2">
          <button type="button" class="btn btn-primary"
          onClick={() => dispatch(updateModule(module))}>Update</button>
          <button type="button" className="btn btn-success" 
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        </div>
      </li>
      <li className="d-flex flex-column row-gap-2 list-group-item pt-3">
      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <button className="d-flex flex-row list-group-item justify-content-between list-group-item-secondary">
              <div className="m-2">
                <h3 className="text-start">{module.name}</h3>
                <p>{module.description}</p> 
              </div>
              <div className="p-2">
                <button onClick={() => dispatch(deleteModule(module._id))} type="button" className="btn btn-danger m-2">Delete</button>
                <button onClick={() => dispatch(setModule(module))} type="button" class="btn btn-success">Edit</button>
              </div>
          </button>
          ))}
      </li>
      
    </div>
  );
}
export default ModuleList;