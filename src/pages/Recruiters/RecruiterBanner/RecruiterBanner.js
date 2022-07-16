import React from "react";
import "./RecruiterBanner.css";

const RecruiterBanner = () => {
  return (
    <section className="recruiter-section">
      <div className="recruiter-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="px-0.5 py-0.5">
                <div className="recruiter-banner-details">
                  <h3 className="title-md">Want to Hire Instantly?</h3>{" "}
                  <p>
                    Hirect enables Founders/CXOs/Hiring Managers/Business Owners
                    to chat directly with relevant, AI-filtered candidates,
                    without consultants, and with 100% data privacy!
                  </p>{" "}
                  <div className="recruiter-banner-img">
                    <img src="/_nuxt/img/recruiter-banner.1c745d2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="px-0.5 py-0.5">
                <div className="Schedule-call">
                  <div>
                    <div className="schedule-a-call contact-ue-form">
                      <p className="schedule-title">Schedule a call now!</p>{" "}
                      <p className="schedule-text">
                        Your next hire is right here. Get started.
                      </p>{" "}
                      <div className="input-container">
                        <div className="input-item el-input">
                          {" "}
                          <input
                            type="text"
                            autocomplete="off"
                            id="user-name"
                            placeholder="Your Name"
                            className="el-input__inner"
                            style={{ borderColor: "rgb(220, 223, 230)" }}
                          />{" "}
                        </div>{" "}
                        <p className="alertText" style={{ display: "none" }}>
                          Your name is required
                        </p>
                      </div>{" "}
                      <div className="input-container">
                        <div className="input-item el-input el-input-group el-input-group--prepend">
                          <div className="el-input-group__prepend">
                            <div className="el-select" style={{ width: "100px" }}>
                              {" "}
                              <div className="el-input el-input--suffix">
                                {/* +91 input */}
                                <input
                                  type="text"
                                  readonly="readonly"
                                  autocomplete="off"
                                  placeholder="+91"
                                  className="el-input__inner"
                                />{" "}
                                <span className="el-input__suffix">
                                  <span className="el-input__suffix-inner">
                                    <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                  </span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                          <input
                            type="text"
                            autocomplete="off"
                            id="phone-number"
                            maxLength="10"
                            placeholder="Enter 10 digit mobile number"
                            className="el-input__inner"
                          />{" "}
                        </div>{" "}
                        <p className="alertText" style={{ display: "none" }}>
                          Your mobile is required
                        </p>
                      </div>{" "}
                      <div className="input-container">
                        <div className="input-item el-input">
                          <input
                            type="text"
                            autocomplete="off"
                            id="user-email"
                            placeholder="Your Work Email"
                            className="el-input__inner"
                          />
                        </div>{" "}
                        <p className="alertText" style={{ display: "none" }}>
                          Your work email is required
                        </p>
                      </div>{" "}
                      <div className="input-container-bottom">
                        <div className="inner-input-item el-input">
                          <input
                            type="text"
                            autocomplete="off"
                            id="company-name"
                            placeholder="Your Company Name"
                            className="el-input__inner"
                          />
                        </div>{" "}
                        <div className="el-select inner-input-item">
                          <div className="el-input el-input--suffix">
                            <input
                              type="text"
                              readonly="readonly"
                              autocomplete="off"
                              placeholder="Your Position"
                              id="user-position"
                              className="el-input__inner"
                            />
                            <span className="el-input__suffix">
                              <span className="el-input__suffix-inner">
                                <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
                              </span>
                            </span>
                          </div>
                          <div
                            className="el-select-dropdown el-popper"
                            style={{ display: " none", minWidth: "485.994px" }}
                          >
                            <div className="el-scrollbar">
                              <div
                                className="el-select-dropdown__wrap el-scrollbar__wrap"
                                style={{
                                  marginBottom: "-17px",
                                  marginRight: "-17px",
                                }}
                              >
                                <ul className="el-scrollbar__view el-select-dropdown__list">
                                  {" "}
                                  <li className="el-select-dropdown__item">
                                    <span>HR</span>
                                  </li>
                                  <li className="el-select-dropdown__item">
                                    <span>Founder/CEO</span>
                                  </li>
                                  <li className="el-select-dropdown__item">
                                    <span>CTO</span>
                                  </li>
                                  <li className="el-select-dropdown__item">
                                    <span>CMO</span>
                                  </li>
                                  <li className="el-select-dropdown__item">
                                    <span>COO</span>
                                  </li>
                                  <li className="el-select-dropdown__item">
                                    <span>Others</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="el-scrollbar__bar is-horizontal">
                                <div
                                  className="el-scrollbar__thumb"
                                  style={{ transform: "translateX(0%)" }}
                                ></div>
                              </div>
                              <div className="el-scrollbar__bar is-vertical">
                                <div
                                  className="el-scrollbar__thumb"
                                  style={{ transform: "translateY(0%)" }}
                                ></div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>{" "}
                        <p className="alertText" style={{ display: "none" }}>
                          Your company name is required
                        </p>{" "}
                        <p
                          className="alertText"
                          style={{ left: "276px", display: "none" }}
                        >
                          Your position is required
                        </p>
                      </div>{" "}
                      <label
                        className="el-checkbox schedule-checkbox is-checked"
                        style={{ color: "rgb(120, 120, 122)" }}
                      >
                        <span className="el-checkbox__input is-checked">
                          <span className="el-checkbox__inner"></span>
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            className="el-checkbox__original"
                            value=""
                          />
                        </span>
                        <span className="el-checkbox__label">
                          I would like to receive updates via whatsapp.{" "}
                        </span>
                      </label>{" "}
                      <button
                        type="button"
                        className="el-button submitButton el-button--primary"
                      >
                        {" "}
                        <span>Submit</span>
                      </button>
                    </div>{" "}
                    {/* <div
                      className="el-dialog__wrapper submit-dialog"
                      style={{ display: "block" }}
                    >
                      <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="dialog"
                        className="el-dialog"
                        style={{ marginTop: "15vh", width: "920px" }}
                      >
                        <div className="el-dialog__header">
                          <span className="el-dialog__title"></span>
                          <button
                            type="button"
                            aria-label="Close"
                            className="el-dialog__headerbtn"
                          >
                            <i className="el-dialog__close el-icon el-icon-close"></i>
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterBanner;
