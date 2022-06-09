import React from "react";
import "./navbar.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        {/* ------------------------------------top nav----------------------------------------------------- */}
        <div class="container-fluid top-nav">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
              <div class="logo">
                <img src="./img/logo.png" img-fluid />
              </div>
            </div>
            <div class="col-5">
              <div class="top-social-icons">
                <ul class="social-icons">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <FacebookOutlinedIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/">
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.tweeter.com/">
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/">
                      <YouTubeIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.google.com/">
                      <GoogleIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkdeen.com/">
                      <LinkedInIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.pinterst.com/">
                      <PinterestIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------new navbar----------------------------------------------------------- */}
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light  ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home<span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/all-courses">
                    All Courses
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/team">
                    Team
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/journal">
                    Journal
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div class="wrapper">
                <h1 class="poly-Head">nddc dmn dm</h1>
              </div>
            </div>
          </nav>
        </div>
        {/* ----------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default Navbar;
