import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("Home")
    }
    else if (location.pathname === "/about") {
      setActiveLink("About")
    }
    else if (location.pathname === "/service-package") {
      setActiveLink("ServicePackage")
    }
    else if (location.pathname === "/gallery") {
      setActiveLink("Gallery")
    }
    else if (location.pathname === "/faq") {
      setActiveLink("FAQ")
    }
    else if (location.pathname === "/contact") {
      setActiveLink("Contact")
    }
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mx-auto fixed-top">
        <div className="container-fluid">
          <button class="d-block d-sm-none btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`${activeLink === "Home" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`${activeLink === "About" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("About")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/service-package"
                  className={`${activeLink === "ServicePackage" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("ServicePackage")}
                >
                  Service & Package
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className={`${activeLink === "Gallery" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("Gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faq"
                  className={`${activeLink === "FAQ" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("FAQ")}
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`${activeLink === "Contact" ? "nav-link active" : "nav-link"}`}
                  onClick={() => setActiveLink("Contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" id="sidebar">
        <div className="offcanvas-header">
          <h1> </h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`${activeLink === "Home" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`${activeLink === "About" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("About")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service-package"
                className={`${activeLink === "ServicePackage" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("ServicePackage")}
              >
                Service & Package
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className={`${activeLink === "Gallery" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("Gallery")}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faq"
                className={`${activeLink === "FAQ" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("FAQ")}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`${activeLink === "Contact" ? "nav-link active" : "nav-link"}`}
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
