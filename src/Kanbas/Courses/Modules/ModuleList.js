import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModuleList.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className={`d-flex flex-column module-section`}>
          {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
      <div class={`list-group full-width`}>

          <button class={`d-flex flex-column list-group-item list-group-item-secondary`}>
              <h3 class={`text-start`}>{module.name}</h3>
              <p>{module.description}</p>                    
          </button>
      </div>
      ))}
    </div>
  );
}
export default ModuleList;