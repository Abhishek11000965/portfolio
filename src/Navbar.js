import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import {useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
  return (
    <div>
      <nav className="barnav">
        <button className="button-nav" onClick={() => navigate("/")}>About Me</button>

        <button className="button-nav" onClick={() => navigate("/Skills")}>Skills</button>
        <button className="button-nav" onClick={() => navigate("/Experience")}>Experience</button>

        <button className="button-nav" onClick={() => navigate("/Contactme")}>Contact Me</button>
        <button className="button-nav" onClick={() => navigate("/Recommendations")}>Recommendations</button>
      </nav>
    </div>
  );
}
