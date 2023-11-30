import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModuleList.css'
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
          onClick={handleUpdateModule}>Update</button>
          <button type="button" className="btn btn-success" 
          onClick={() => handleAddModule(module)}>Add</button>
        </div>
      </li>
      <li className="d-flex flex-column row-gap-2 list-group-item pt-3">
      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <div className="d-flex flex-row list-group-item justify-content-between list-group-item-secondary">
              <div className="m-2">
                <h3 className="text-start">{module.name}</h3>
                <p>{module.description}</p> 
              </div>
              <div className="p-2">
                <button onClick={() => handleDeleteModule(module._id)} type="button" className="btn btn-danger m-2">Delete</button>
                <button onClick={() => dispatch(setModule(module))} type="button" class="btn btn-success">Edit</button>
              </div>
          </div>
          ))}
      </li>
      
    </div>
  );
}
export default ModuleList;