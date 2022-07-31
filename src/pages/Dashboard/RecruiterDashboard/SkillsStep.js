import React, { useState } from "react";
import "./SkillsStep.css";

const SkillsStep = ({ setTitleStep, setSkillsStep, setScopeStep }) => {
  const ScopeStepNextBtn = () => {
    setScopeStep(true);
    setSkillsStep(false);
  };

  const scopeStepBackBtn = () => {
    setSkillsStep(false);
    setTitleStep(true);
  };
  return (
    <section className="container p-3">
      <div className="row">
        <div className="col-md-6 p-5 step-left">
          <div className="progress-bar rounded-pill">
            <div
              className="progress-bar-inner rounded-pill"
              style={{ width: "50%" }}
            />
          </div>
          <div className="progress-bar-content d-flex justify-content-between mt-2">
            <span className="text-green">Title</span>
            <span className="text-green">Skills</span>
            <span>Scope</span>
            <span>Salary</span>
          </div>
          <div className="step1-title">
            <h2 className=" text-white mt-5 fs-2 w-90">
              What are the main skill required for your work?
            </h2>
          </div>
        </div>

        <div className="col-md-6 p-5 step-right d-flex flex-column">
          <h5 className="text-white m-top">Search or add up to 10 skills</h5>
          {/* <input
            type="text"
            value="Create an AI engines for ATS"
            className="w-100 text-small input rounded mt-2 mb-4"
          /> */}
          <div className="form-group has-search mt-2 mb-4">
            <span className="fa fa-search form-control-feedback "></span>
            <input
              type="text"
              className="form-control input"
              placeholder="Search"
            />
          </div>

          <p className="text-green skill-text">
            <i className="fa-solid fa-star"></i>For the best results add 3-5 skills
          </p>
          <h6 className="text-white mb-3">Selected Skill</h6>
          <div className="d-flex flex-wrap">
            <button
              type="button"
              className="btn btn-remove-style rounded-pill me-3 mt-2"
            >
              Artificial Intelligence{" "}
              <span className="badge text-bg-secondary">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
            <button
              type="button"
              className="btn btn-remove-style rounded-pill me-3 mt-2"
            >
              Natural Language Processing{" "}
              <span className="badge text-bg-secondary">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
            <button
              type="button"
              className="btn btn-remove-style rounded-pill me-3 mt-2"
            >
              Machine Learning{" "}
              <span className="badge text-bg-secondary">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
            <button
              type="button"
              className="btn btn-remove-style rounded-pill me-3 mt-2"
            >
              Data Science{" "}
              <span className="badge text-bg-secondary">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
          </div>
          <div className="popular-skill mt-4">
            <div className="popular-skill-title d-flex justify-content-between align-items-center mb-4">
              {/* <h5 className="text-white">Popular skills</h5>
              <i className="fa-solid fa-angle-up text-white"></i> */}
               <select
                  className="bg-transparent border-0 text-light px-2 py-1"
                  show-tick
                  style={{ width:"100%" }}
                >
                  <option className="special">
                  Popular skills
                  </option>
                  <option className="special">Python</option>
                  <option className="special">Aws</option>
                  <option className="special">Fried Potatoes</option>
                </select>
            </div>
            <div className="d-flex flex-wrap">
              <button type="button" className="btn btn-add rounded-pill me-3 mt-2">
                Python{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button type="button" className="btn btn-add rounded-pill me-3 mt-2">
                DeepLearning{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button type="button" className="btn btn-add rounded-pill me-3 mt-2">
                TensorFlow{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button type="button" className="btn btn-add rounded-pill me-3 mt-2">
                AI{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button type="button" className="btn btn-add rounded-pill me-3 mt-2">
                Neural Network{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button type="button" className="btn text-green btn-text me-3 mt-2">
                See more
              </button>
            </div>
          </div>
          <div className="action d-flex justify-content-end align-items-end">
            <button
              onClick={scopeStepBackBtn}
              className="btn outlined-button rounded-pill me-4"
            >
              Back
            </button>
            <button
              onClick={ScopeStepNextBtn}
              className="btn btn-green rounded-pill"
            >
              Next: Scope
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsStep;
