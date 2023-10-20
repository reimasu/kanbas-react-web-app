import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Courses/Home";
import Account from "./Account";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
function Kanbas() {
  return (
    <div className={`d-flex flex-row flex-nowrap`}>
      <KanbasNavigation />
      <div className={`all-screens`}>
        <hr/>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Home" element={<Home/>} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;