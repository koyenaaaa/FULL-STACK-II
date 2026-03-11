import React from "react";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand fw-bold" href="#">
        My Website
      </a>

      {/* Toggle button (mobile view) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
