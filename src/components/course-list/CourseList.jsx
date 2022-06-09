import React from "react";
import "./courseList.css";
const CourseList = () => {
  const courseList = [
    {
      img: "./img/online/o1.png",
      head: "UI/UX Design Courses",
      title: "25 Courses",
    },
    {
      img: "./img/online/o2.png",
      head: "Art & Design",
      title: "25 Courses",
    },
    {
      img: "./img/online/o3.png",
      head: "Computer Science",
      title: "65 Courses",
    },
    {
      img: "./img/online/o4.png",
      head: "History & Archeologic",
      title: "50 Courses",
    },
    {
      img: "./img/online/o5.png",
      head: "Software Engineering",
      title: "60 Courses",
    },
    {
      img: "./img/online/o6.png",
      head: "Information Software",
      title: "55 Courses",
    },
    {
      img: "./img/online/o7.png",
      head: "Health & Fitness",
      title: "515 Courses",
    },
    {
      img: "./img/online/o8.png",
      head: "Marketing",
      title: "65 Courses",
    },
    {
      img: "./img/online/o9.png",
      head: "Graphic Design",
      title: "75 Courses",
    },
    {
      img: "./img/online/o10.png",
      head: "Music",
      title: "725 Courses",
    },
    {
      img: "./img/online/o11.png",
      head: "Business Administration",
      title: "55 Courses",
    },
    {
      img: "./img/online/o12.png",
      head: "Web Management",
      title: "15 Courses",
    },
  ];

  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6> COURSES</h6>
            <h1>Browse Our Online Courses</h1>

            <div class="container mt-5">
              <div class="row">
                {courseList.map((curVal) => {
                  return (
                    <>
                      <div class="col-md-2 mt-3 ">
                        <div class="card card-courseList ">
                          <div class="text-center mt-5">
                            <img
                              src={curVal.img}
                              width="80"
                              alt="corse-list-img"
                            />
                          </div>

                          <div class="text-center mt-5 ">
                            <h5>{curVal.head}</h5>
                            <span class="title-text">{curVal.title}</span>
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

export default CourseList;
