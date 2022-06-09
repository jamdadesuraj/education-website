import React from "react";

const Team = () => {
  const teatimonialList = [
    {
      img: "./img/team/t1.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t2.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t3.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t4.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t4.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t2.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t1.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
    {
      img: "./img/team/t4.webp",
      name: "Ph.D Adrian Molises",
      dig: "DEVELOPER AND LEAD",
      info: "INSTRUCTOR",
    },
  ];

  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6>TEAM</h6>
            <h1>Our Expert Staff</h1>

            <div class="container mt-5">
              <div class="row">
                {teatimonialList.map((curVal) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div class="card mt-5" style={{ height: "70vh" }}>
                          <img
                            class="card-img-top"
                            src={curVal.img}
                            alt="Card-pic-cap"
                          />
                          <div class="card-body">
                            <h3>{curVal.name}</h3>
                            <p className="text-center">DEVELOPER AND LEAD</p>
                            <h6>INSTRUCTOR</h6>
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
};

export default Team;
