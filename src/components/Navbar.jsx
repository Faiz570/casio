import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="https://casiostore.pk/wp-content/uploads/2018/09/logo.png" alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/gallery">Gallery</Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/Signup" className="btn btn-outline-light rounded-pill">Sign Up</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
