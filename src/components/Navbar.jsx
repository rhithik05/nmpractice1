import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [loggedin, setloggedin] = useState(null);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedin"));
    setloggedin(user);
  }, []);
  const handlelogout = (e) => {
    sessionStorage.removeItem("loggedin");
    alert("logged out successfully");
    setloggedin(null);
  };
  return (
    <>
      <div className="nav-bar">
        <div className="logo-section">
          <span>Poorna bhavan</span>
        </div>
        <div className="link-section">
          <a className="link-button" href="#menu">
            Menu
          </a>
          <a className="link-button" href="#booktable">
            Book table
          </a>
          <a className="link-button" href="#about">
            About
          </a>
          <a className="link-button" href="#contact">
            Contact
          </a>
          {loggedin ? (
            <div>
              <span>welcome, {loggedin.username}</span>
              <button onClick={handlelogout}>logout</button>
            </div>
          ) : (
            <Link className="link-button" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
