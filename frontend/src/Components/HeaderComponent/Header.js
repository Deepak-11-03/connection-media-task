import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }


  return (
    <div>
      <nav className="navbar">
        {/* <ul> */}
        {localStorage.getItem("token") ? (
          <><span className="user-name">Welcome &nbsp; {user}</span>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to='post-job'>Post Job</Link>
            </li>
            <li>
              <Link to="/" onClick={Logout}>
                Logout
              </Link>
            </li>
          </ul>
          </>
        ) : (
          <><span><i></i></span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul> 
            </>
        )}
      </nav>
    </div>
  );
}
