import React from "react";
import "./topnav.css";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const TopNav = () => {
  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="top-logo">
                <img src="./img/logo.png" alt="top-logo" />
              </div>
            </div>
            <div className="col-6">
              <div class="social-icons">
                <ul>
                  <li>
                    <Link to="www.facebook.com" target="_blank">
                      <FacebookOutlinedIcon />
                    </Link>
                    <span>Facebook</span>
                  </li>
                  <li>
                    <Link to="https://twitter.com" target="_blank">
                      <TwitterIcon />
                    </Link>

                    <span>Twitter</span>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <LinkedInIcon />
                    </Link>

                    <span>Linkedin</span>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <InstagramIcon />
                    </Link>

                    <span>Instagram</span>
                  </li>
                  <li>
                    <Link to="https://in.pinterest.com/" target="_blank">
                      <PinterestIcon />
                    </Link>

                    <span>Pinterest</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="top-nav-button">
                <Link to="/signup">
                  <button>Signup</button>
                </Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
