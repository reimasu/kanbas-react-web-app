import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModuleList.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const weeks = ["Week 1", "Week 2"];
  return (
    <div className={`d-flex flex-column module-section`}>
          {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
      <div class={`list-group full-width`}>

          <button class={`d-flex justify-content-between list-group-item list-group-item-action`}>
          <div class={`d-flex`}>
              <h3>{module.name}</h3>                    
          </div>
          </button>


      </div>
      ))}
    </div>
  );
}
export default ModuleList;