import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="about-img ">
                <img
                  src="./img/about.jpg"
                  className="img-fluid"
                  alt="about-img"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="about-data">
                <h5>LEARN ANYTHING</h5>
                <h1>Benefits About Online Learning Expertise</h1>
                <div className="about-cards mt-5">
                  <div class="cards bg-facebook d-flex align-items-center">
                    <div class="card-body">
                      <div class="d-flex flex-row align-items-center">
                        <img
                          src="./img/online course.png"
                          className="img-fluid"
                          alt="about-content-img"
                        />
                        <div class="cards-data">
                          <h6 class="text-black">Online Courses</h6>
                          <p class="text-black card-text">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-cards mt-3">
                  <div class="cards bg-facebook d-flex align-items-center">
                    <div class="card-body">
                      <div class="d-flex flex-row align-items-center">
                        <img
                          src="./img/certificate.png"
                          className="img-fluid"
                          alt="content-img"
                        />
                        <div class="cards-data ml-5">
                          <h6 class="text-black">Earn A Certificates</h6>
                          <p class="text-black card-text">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
