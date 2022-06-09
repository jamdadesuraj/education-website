import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="hero-section ">
        <div className="hero-data container-fluid">
          <h2>Welcome to My School</h2>
          <h1>Best Online Education Expertise</h1>
          <p>ARE YOU READYTO CHOOSE INDIA's BEST SCHOOL FOR YOUR CHILD?</p>
          <div className="hero-buttons">
            <Link to="/all-courses">
              <button>Get Starting Now</button>
            </Link>
            <Link to="/courses">
              <button>View Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
