import React from "react";
import "./blog.css";
const Blog = () => {
  const blogList = [
    {
      img: "./img/blog/b1.webp",
      head: "Build your Dream Software & Engineering Career",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: "./img/blog/b2.webp",
      head: "Build your Dream Software & Engineering Career",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: "./img/blog/b3.webp",
      head: "Build your Dream Software & Engineering Career",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6> OUR BLOG</h6>
            <h1>Recent From Blog</h1>

            <div class="container mt-5">
              <div class="row">
                {blogList.map((curVal) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                        <div class="card">
                          <img
                            class="card-img-top"
                            src={curVal.img}
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <h5 class="card-title">{curVal.head}</h5>

                            <p class="card-text">{curVal.para}</p>
                            <a href="#" class="card-link">
                              ADMIN
                            </a>
                            <a href="#" class="card-link">
                              3 COMMENTS
                            </a>
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

export default Blog;
