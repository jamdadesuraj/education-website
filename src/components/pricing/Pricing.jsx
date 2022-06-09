import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";
const Blog = () => {
  const blogList = [
    {
      plan: "BASIC PLAN",
      price: "$49K",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      btn: "Get Started",
    },
    {
      plan: "BEGINNER PLAN",
      price: "$79K",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      btn: "Get Started",
    },
    {
      plan: "PREMIUM PLAN",
      price: "$489K",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      btn: "Get Started",
    },
    {
      plan: "ULTIMATE PLAN",
      price: "$899K",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      btn: "Get Started",
    },
  ];
  return (
    <>
      <section className="courses-section">
        <div className="container-fluid">
          <div className="course-data">
            <h6> OUR PRICING</h6>
            <h1>Pricing & Packages</h1>

            <div class="container mt-5">
              <div class="row">
                {blogList.map((curVal) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
                        <div class="card">
                          <div class="card-body pricing-data">
                            <h5 class="card-title">{curVal.plan}</h5>
                            <h6 class="card-subtitle mb-2 ">{curVal.price}</h6>
                            <p class="card-text">{curVal.para}</p>
                            <button>
                              <Link> {curVal.btn}</Link>
                            </button>
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
