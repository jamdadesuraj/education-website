import React from "react";
import "./courses.css";
const AllCourses = () => {
  const courseData = [
    {
      price: " $100 All Course / $15 per month",
      icon: "https://i.imgur.com/suuFVrQ.png",
      img: "https://static.javatpoint.com/tutorial/software-engineering/images/software-engineering-introduction.png",
      head: "Introducing to Software Engineering",
      para: "50 lectures (190 hrs)",
    },
    {
      price: "      $200 All Course / $25 per month",
      icon: "https://i.imgur.com/suuFVrQ.png",
      img: "https://www.netsiparis.com/Resim/0x0/adobe-photoshop-cc-for-teams-65297615ba01a12-1-yillik-kiralama-yeni-alim__100501-1.jpg",
      head: "Enhancing Adobe Photoshop CC 2020 Skills",
      para: "30 lectures (125 hrs)",
    },
    {
      price: "      $500 All Course / $35 per month",
      icon: "https://i.imgur.com/suuFVrQ.png",
      img: "https://findnewscholarships.com/wp-content/uploads/2022/02/html-css-js.png",
      head: "HTML, CSS, and Javascript for Web Developers",
      para: "30 lectures (125 hrs)",
    },
  ];

  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6>OUR COURSES</h6>
            <h1>Explore Our Popular Online Courses</h1>

            <div class="container mt-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="custom-badge text-uppercase">See More</span>
              </div>

              <div class="row">
                {courseData.map((curVal) => {
                  return (
                    <>
                      <div class="col-md-4 mt-5">
                        <div class="card card-course ">
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center time">
                              <i class="fa fa-clock-o"></i>
                              <small class="ml-1 text-primary">
                                {curVal.price}
                              </small>
                            </div>

                            <img src={curVal.icon} width="20" />
                          </div>

                          <div class="text-center mt-5">
                            <img src={curVal.img} width="250" />
                          </div>

                          <div class="text-center mt-5">
                            <h5>{curVal.head}</h5>
                            <span class="text-success">{curVal.para}</span>
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

export default AllCourses;
