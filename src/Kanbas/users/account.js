import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount(id);
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <label for="password" className="form-label">Password</label>
          <input id="password" className="form-control" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>

          <label for="firstname" className="form-label">First Name</label>
          <input id="firstname" className="form-control" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <label for="lastname" className="form-label">Last Name</label>
          <input id ="lastname" className="form-control" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <label for="dob" className="form-label">DOB</label>
          <input id="dob" type="date" className="form-control" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <label for="email" type="email" className="form-label">Email</label>
          <input id="email" className="form-control" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button className="btn btn-primary" onClick={save}>
        Save
      </button>
      <button className="btn btn-primary" onClick={signout}>
        Signout
      </button>
      <Link to="/project/admin/users" className="btn btn-warning w-100">
        Users
      </Link>
    </div>
  );
}
export default Account;