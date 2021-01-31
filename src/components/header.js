import React from "react";
import "./styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="navbar-item"> Contact</li>
          <li className="navbar-item"> Login</li>
          <li className="navbar-item"> Sign Up</li>
        </ul>
      </nav>
    </div>
  );
}
