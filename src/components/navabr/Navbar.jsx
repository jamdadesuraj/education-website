import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import TopNav from "../top-nav/TopNav";
import Hero from "../hero/Hero";
import Scroll from "../scroll/Scroll";
const Navbar = () => {
  return (
    <>
      <div className="header-blue container-fluid">
        <TopNav />
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
          <div className="wrapper"></div>
          <div className="container-fluid all-show">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/all-courses">
                    All Courses
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/team">
                    Team
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Journal
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <i className="fa fa-search"></i>
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex flex-column sim">
                <span>Get Certificate</span>
                <small className="text-primary">view your quote</small>
              </div>
            </div>
          </div>
        </nav>
        <Hero />
        <Scroll />
      </div>
    </>
  );
};

export default Navbar;
