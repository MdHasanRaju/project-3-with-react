import React from "react";
import "./RecruiterDashboard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../assets/images/instant-chat-ceo1.e16699e.png";
import slide2 from "../../../assets/images/recruiter-banner.e64debe.jpg";
import JobCategoryStep from "./JobCategoryStep";
import SkillsStep from "./SkillsStep";
import ScopeStep from "./ScopeStep";
import SalaryStep from "./SalaryStep";

const RecruiterDashboard = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <section className="recruiter-section py-5 ">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-7 d-flex">
            <div className="dashboard-title-box">
              <h5 className="text-light">Your Dashboard</h5>
              <p className="text-light">Aloke p</p>
            </div>
            <div className="d-flex">
              <div className="user-icon">
                <i class="fa-solid fa-user-plus"></i>
              </div>
              <div className="question-icon">
                <i class="fa-solid fa-question"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="dashboard-catalog-title">
              <button className="browse-project-btn me-5 position-relative ">
                <div className="position-absolute">
                  <i class="fa-solid fa-question text-dark"></i>
                </div>
                Browse project catalog
              </button>
              <button className="post-job-btn">Post a job</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="border border-secondary div-bg rounded">
              <div className="d-flex justify-content-between align-items-center px-3 pt-4 ">
                <h5 className="text-light">Your postings</h5>
                <p className="green-text">See all postings</p>
              </div>
              <hr className="bg-secondary" />
              <div className="d-flex justify-content-between mt-3 px-3 py-2">
                <h6 className="text-light">Create an Al engine for ATS</h6>
                <div className="ellipsis-icon">
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3 px-3 py-2">
                <p className="text-secondary">Fixed-Price-Public</p>
                <p className="text-secondary">
                  <span className="green-text">13</span>
                  <span className="span-new">(5 new)</span>
                  <br />
                  Proposals
                </p>
                <p className="text-secondary">
                  <span className="green-text">7</span>
                  <br />
                  Message
                </p>
                <p className="text-secondary">
                  <span>0</span>
                  <br />
                  Hired
                </p>
              </div>
              <p className="px-3 py-2 text-secondary">Created 7 days ago</p>
            </div>
            {/* draft-part */}
            <div className="border border-secondary div-bg rounded mt-4">
              <div className="d-flex justify-content-between mt-3 px-3 py-2">
                <h5 className="text-light">Your Drafts</h5>
                <p className="green-text">See all drafts</p>
              </div>
              <hr className="bg-secondary" />
              <div className="d-flex justify-content-between mt-3 px-3 py-2">
                <h6 className="text-light">Need a programmer manager</h6>
                <div className="ellipsis-icon">
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <p className="px-3 py-2 text-secondary">saved 53 seconds ago</p>
              <hr className="bg-secondary" />
              <div className="d-flex justify-content-between mt-3 px-3 py-2">
                <h6 className="text-light">Create an Al engines fo ATS</h6>
                <div className="ellipsis-icon">
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <p className="px-3 py-2 text-secondary">saved 53 seconds ago</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="div-bg border border-secondary rounded">
              <h5 className="p-3 text-light">Ready-to-buy the projects</h5>
              <hr className="bg-light" />
              <div className="px-3 py-0 text-light">
                <p>
                  Know what you need but not how to get it done? Buy a project
                  priced and scoped by a pro to start working right away.
                </p>
                <p>We think you might like help with</p>
              </div>
              {/* slider */}
              <div>
                <div className="row px-4">
                  <Slider {...settings}>
                    <div className="col-lg-12 col-md-12 seeker-column">
                      <div
                        tabIndex="-1"
                        data-index="-3"
                        aria-hidden="true"
                        className="slick-slide slick-cloned"
                        style={{ width: "auto" }}
                      >
                        <div>
                          <div
                            tabIndex="-1"
                            className="testimonial-card1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="seeker-img">
                              <img width="95%" src={slide1} alt="" />
                            </div>{" "}
                            <p className="text-light text-center">
                              Web application development
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 seeker-column">
                      <div
                        tabIndex="-1"
                        data-index="-3"
                        aria-hidden="true"
                        className="slick-slide slick-cloned"
                        style={{ width: "auto" }}
                      >
                        <div>
                          <div
                            tabIndex="-1"
                            className="testimonial-card1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="seeker-img">
                              <img width="95%" src={slide2} alt="" />
                            </div>{" "}
                            <p className="text-light text-center">
                              Web application development
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 getting-started">
          <div className="col-lg-12 ">
            <div className="text-light border border-secondary rounded">
              <h5 className="px-3 pt-3 pb-0">Getting started</h5>
              <hr className="bg-secondary" />
              <div className="px-3 py-2">
                <h6>What would you like to do?</h6>
                <input
                  type="radio"
                  id="create"
                  name="fav_language"
                  value="HTML"
                />
                <label for="create" className="ms-2">
                  Create a new job post
                </label>
                <br />
                <input
                  type="radio"
                  id="Reuse"
                  name="fav_language"
                  value="CSS"
                />
                <label for="Reuse" className="ms-2">
                  Reuse a preview job post{" "}
                </label>
                <br />
              </div>
              <div className="mt-4 px-3 py-2"  >
              <select class="custom-select div-bg border border-secondary rounded text-light px-2 py-1" show-tick style={{ width: "450px" }}>
                <option>Create an Al engine for ATS</option>
                <option>Burger</option>
                <option>Ice Cream</option>
                <option>Fried Potatoes</option>
              </select>
              </div>
              <hr className="bg-secondary" />
              <div className="d-flex justify-content-end px-3 py-2">
                <button className="btn btn-text text-light me-2">Cancel</button>
                <button className="post-job-btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <div className="recruiter-bg">
    <JobCategoryStep />
      <SkillsStep />
      <ScopeStep/>
      <SalaryStep/>
    </div>
    </>
  );
};

export default RecruiterDashboard;
