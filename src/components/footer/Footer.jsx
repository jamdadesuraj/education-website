import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LinkIcon from "@mui/icons-material/Link";
const Footer = () => {
  return (
    <>
      <footer id="main-footer" dir="rtl">
        <div className="Rectangle2794">
          <button id="btnScrollToTop">
            <div className="scroll-top">
              <ArrowCircleUpIcon />
            </div>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3  order-sm-12">
              <div className="beside">
                <img src="./img/logo.png" alt="footer-logo" />
                <h4 className="item1 mt-2">School</h4>
                <h4 className="item2">ONLINE EDUCATION & LEARNING</h4>
                <p className="explanation">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia....
                </p>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="panel-group">
                <div className="link">
                  <h4 className="panel-title">
                    ? Have a Questions
                    <a data-toggle="collapse" href="#collapse1"></a>
                  </h4>
                  <div className="inline d-flex flex-row">
                    <div className="triangle-left"></div>
                    <div className="hl"></div>
                  </div>
                  <div id="collapse1" className="panel-collapse collapsein">
                    <ul className="list-unstyled">
                      <li className="li">
                        <Link to="/journal">Journal</Link>
                      </li>
                      <li className="li">
                        <Link to="/team">Team</Link>
                      </li>
                      <li className="li">
                        <Link to="/courses">All-Courses</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="link">
                  <h4 className="panel-title">
                    Quick Links
                    <a data-toggle="collapse" href="#collapse2"></a>
                  </h4>
                  <div className="inline d-flex flex-row">
                    <div className="triangle-left"></div>
                    <div className="hl"></div>
                  </div>
                  <div id="collapse2" className="panel-collapse2 collapsein">
                    <ul className="list-unstyled">
                      <li className="li">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="li">
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li className="li">
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                      </li>
                      <li className="li">
                        <Link to="/privacy">Privacy</Link>
                      </li>
                      <li className="li">
                        <Link to="/testimonial">Feedbacks</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="link">
                  <h4 className="panel-title">
                    Explore
                    <a data-toggle="collapse" href="#collapse3"></a>
                  </h4>
                  <div className="inline d-flex flex-row">
                    <div className="triangle-left"></div>
                    <div className="hl"></div>
                  </div>
                  <div id="collapse3" className="panel-collapse2 collapsein">
                    <ul className="list-unstyled">
                      <li className="li">
                        <Link to="/about">About-Us</Link>
                      </li>
                      <li className="li">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="li">
                        <Link to="/courses">Courses</Link>
                      </li>
                      <li className="li">
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className="li">
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 order-md-12">
              <div className="address">
                <div className="location">
                  <span className="d-inline-block">
                    <LocationOnIcon />
                  </span>
                  <span className="d-inline-block">
                    <p className="break">
                      Fake St. Mountain View, pune, 411052
                      <br />
                    </p>
                  </span>
                </div>
                <div className="phone">
                  <span className="d-inline-block">
                    <PhoneIphoneIcon />
                  </span>
                  <span className="d-inline-block">
                    <p> 987654321</p>
                  </span>
                </div>
                <div className="message">
                  <span className="d-inline-block">
                    <LocalPostOfficeIcon />
                  </span>
                  <span className="d-inline-block">
                    <p>srjaero@mail.com</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="social-icons">
                <span className="fa-stack fa-1x pt-3">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <Link to="https://twitter.com" target="_blank">
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </Link>
                </span>
                <span className="fa-stack fa-1x pt-3">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <Link to="https://linkdin.com" target="_blank">
                    <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                  </Link>
                </span>
                <span className="fa-stack fa-1x pt-3">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <Link to="/whatsapp.com" target="_blank">
                    <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                  </Link>
                </span>
                <span className="fa-stack fa-1x pt-3">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <Link to="/https://telegram.com" target="_blank">
                    <i className="fab fa-telegram fa-stack-1x fa-inverse"></i>
                  </Link>
                </span>
                <span className="fa-stack fa-1x pt-3">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <Link to="/https://skype.com" target="_blank">
                    <i className="fab fa-skype fa-stack-1x fa-inverse"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Rectangle2795 text-center text-black pt-4">
          Copyright ©2022 All rights reserved | Created By &nbsp;
          <span>
            <a href="https://trusting-ride-7f31ea.netlify.app" target="_blank">
              Suraj Jamdade
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
