import React from "react";
import "./RecruiterDashboard.css";

const RecruiterDashboard = () => {
  return (
    <section className="recruiter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex">
            <div className="dashboard-title-box">
              <h5>Your Dashboard</h5>
              <p>Aloke p</p>
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
              <button className="browse-project-btn me-5 position-relative">
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
                <div className="border border-dark rounded">
                <div className="d-flex justify-content-between p-3">
                    <h5>Your postings</h5>
                    <p>See all postings</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-3 p-3">
                    <h6>Create an Al engine for ATS</h6>
                    <div className="ellipsis-icon">
                    <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-3 p-3">
                    <p>Fixed-Price-Public</p>
                    <p><span className="span-number">13</span><span className="span-new">(5 new)</span><br />Proposals</p>
                    <p><span className="span-number">7</span><br />Message</p>
                    <p><span>0</span><br />Hired</p>
                </div>
                <p className="p-3">Created 7 days ago</p>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterDashboard;
