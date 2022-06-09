import React from "react";
import "./complation.css";
const Complation = () => {
  const cardData = [
    {
      img: "./img/c1.png",
      no: "1500",
      para: "SUCCESS STORIES",
    },
    {
      img: "./img/c2.png",
      no: "582",
      para: "SCHEDULES",
    },
    {
      img: "./img/c3.png",
      no: "1000",
      para: "TRUSTED TUTORS",
    },
    {
      img: "./img/c4.png",
      no: "5000",
      para: "COURSES",
    },
  ];

  return (
    <>
      <section className="counter-section">
        <div className="container-fluid">
          <div className="row">
            {cardData.map((curval) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                    <div className="counter-cards ">
                      <div class="card-body">
                        <div class="d-flex flex-row align-items-center">
                          <img
                            src={curval.img}
                            className="img-fluid"
                            alt="cards img"
                          />
                          <div class="cards-data ml-5 counter-data ">
                            <h6 class="text-black">{curval.no}</h6>
                            <p class="text-black card-text">{curval.para}</p>
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
      </section>
    </>
  );
};

export default Complation;
