import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Nav from "../../Nav";
import Signin from "../users/signin";
import Signup from "../users/signup";
import Account from "../users/account";
import UserTable from "../users/table";
import "./project.css"
function Project() {

  return (
    <div className="row">
      <div className="col-2">
        <nav className="list-group black">
            <Link to="/project/home"
                className={`list-group-item list-group-item-action`}>Home</Link>
            <Link to="/project/signin"
                className={`list-group-item list-group-item-action`}>Sign In</Link>
            <Link to="/project/signup"
                className={`list-group-item list-group-item-action`}>Sign Up</Link>
            <Link to="/project/account"
                className={`list-group-item list-group-item-action`}>Account</Link>
            <Link to="/project/search"
                className={`list-group-item list-group-item-action`}>Search</Link>
        </nav>
      </div>
      <div className="col-10">
        <Routes>
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;