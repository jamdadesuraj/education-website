import React from "react";
import "./testimonial.css";
function Testimonial() {
  const teatimonialList = [
    {
      img: "./img/testo/t1.webp",
      name: "jon smith scott",
      dig: "UI/UX Developer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: "./img/testo/t2.webp",
      name: "jon smith scott",
      dig: "React Developer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      img: "./img/testo/t3.webp",
      name: "jon smith scott",
      dig: "Node Developer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6>TESTIMONIAL</h6>
            <h1>Our Successful Students</h1>

            <div class="container mt-5">
              <div class="row">
                {teatimonialList.map((curVal) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-cards mt-3">
                          <div class="cards bg-facebook d-flex align-items-center">
                            <div class="card-body">
                              <div class="d-flex flex-row align-items-center test-img">
                                <img
                                  src={curVal.img}
                                  className="img-fluid"
                                  alt="testimonil-img"
                                />
                                <div class="cards-data ml-5">
                                  <h4 class="">{curVal.name}</h4>
                                  <h5 class="text-black">{curVal.dig}</h5>
                                  <p class="text-black card-text">
                                    {curVal.para}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
