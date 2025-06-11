import { NavLink } from "react-router-dom";
import '../scss/Navbar.scss'
import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";

export default function Navbar() {
const { registrations } = useContext(RegistrationContext);


return (

    <nav className="navbar navbar-expand-lg fixed-top py-3 shadow-sm navbar-dark navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">StudentPortal</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </ul>

          {registrations && (
  <span className="text-light ms-auto me-3 small">
    ✅ Registered: <strong>{registrations.course}</strong>
  </span>
)}


          <form className="d-flex ms-auto" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
