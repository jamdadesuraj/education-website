import React from "react";
import "./home.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div class="header-blue">
          <div class="container hero">
            <div class="row">
              <div class="col-6 ">
                <h1>Best Online Education Expertise</h1>
                <p>
                  Far far away,behind the word mountain , far from the countries
                  vokalia and Consonantia , there live the blind text
                  <br />
                </p>
                <Button variant="contained" endIcon={<ArrowRightAltIcon />}>
                  Get Started Now
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<ArrowRightAltIcon />}
                >
                  View Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
