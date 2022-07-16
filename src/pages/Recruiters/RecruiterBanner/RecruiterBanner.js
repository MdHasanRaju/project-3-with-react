import React from "react";
import "./RecruiterBanner.css";

const RecruiterBanner = () => {
  return (
    <section class="recruiter-section">
      <div class="recruiter-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="recruiter-banner-details">
                  <h3 class="title-md">Want to Hire Instantly?</h3>{" "}
                  <p>
                    Hirect enables Founders/CXOs/Hiring Managers/Business Owners
                    to chat directly with relevant, AI-filtered candidates,
                    without consultants, and with 100% data privacy!
                  </p>{" "}
                  <div class="recruiter-banner-img">
                    <img src="/_nuxt/img/recruiter-banner.1c745d2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="Schedule-call">
                  <div>
                    <div class="schedule-a-call contact-ue-form">
                      <p class="schedule-title">Schedule a call now!</p>{" "}
                      <p class="schedule-text">
                        Your next hire is right here. Get started.
                      </p>{" "}
                      <div class="input-container">
                        <div class="input-item el-input">
                          {" "}
                          <input
                            type="text"
                            autocomplete="off"
                            id="user-name"
                            placeholder="Your Name"
                            class="el-input__inner"
                            style={{ borderColor: "rgb(220, 223, 230)" }}
                          />{" "}
                        </div>{" "}
                        <p class="alertText" style={{ display: "none" }}>
                          Your name is required
                        </p>
                      </div>{" "}
                      <div class="input-container">
                        <div class="input-item el-input el-input-group el-input-group--prepend">
                          <div class="el-input-group__prepend">
                            <div class="el-select" style={{ width: "100px" }}>
                              {" "}
                              <div class="el-input el-input--suffix">
                                {/* +91 input */}
                                <input
                                  type="text"
                                  readonly="readonly"
                                  autocomplete="off"
                                  placeholder="+91"
                                  class="el-input__inner"
                                />{" "}
                                <span class="el-input__suffix">
                                  <span class="el-input__suffix-inner">
                                    <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
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
                            class="el-input__inner"
                          />{" "}
                        </div>{" "}
                        <p class="alertText" style={{ display: "none" }}>
                          Your mobile is required
                        </p>
                      </div>{" "}
                      <div class="input-container">
                        <div class="input-item el-input">
                          <input
                            type="text"
                            autocomplete="off"
                            id="user-email"
                            placeholder="Your Work Email"
                            class="el-input__inner"
                          />
                        </div>{" "}
                        <p class="alertText" style={{ display: "none" }}>
                          Your work email is required
                        </p>
                      </div>{" "}
                      <div class="input-container-bottom">
                        <div class="inner-input-item el-input">
                          <input
                            type="text"
                            autocomplete="off"
                            id="company-name"
                            placeholder="Your Company Name"
                            class="el-input__inner"
                          />
                        </div>{" "}
                        <div class="el-select inner-input-item">
                          <div class="el-input el-input--suffix">
                            <input
                              type="text"
                              readonly="readonly"
                              autocomplete="off"
                              placeholder="Your Position"
                              id="user-position"
                              class="el-input__inner"
                            />
                            <span class="el-input__suffix">
                              <span class="el-input__suffix-inner">
                                <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                              </span>
                            </span>
                          </div>
                          <div
                            class="el-select-dropdown el-popper"
                            style={{ display: " none", minWidth: "485.994px" }}
                          >
                            <div class="el-scrollbar">
                              <div
                                class="el-select-dropdown__wrap el-scrollbar__wrap"
                                style={{
                                  marginBottom: "-17px",
                                  marginRight: "-17px",
                                }}
                              >
                                <ul class="el-scrollbar__view el-select-dropdown__list">
                                  {" "}
                                  <li class="el-select-dropdown__item">
                                    <span>HR</span>
                                  </li>
                                  <li class="el-select-dropdown__item">
                                    <span>Founder/CEO</span>
                                  </li>
                                  <li class="el-select-dropdown__item">
                                    <span>CTO</span>
                                  </li>
                                  <li class="el-select-dropdown__item">
                                    <span>CMO</span>
                                  </li>
                                  <li class="el-select-dropdown__item">
                                    <span>COO</span>
                                  </li>
                                  <li class="el-select-dropdown__item">
                                    <span>Others</span>
                                  </li>
                                </ul>
                              </div>
                              <div class="el-scrollbar__bar is-horizontal">
                                <div
                                  class="el-scrollbar__thumb"
                                  style={{ transform: "translateX(0%)" }}
                                ></div>
                              </div>
                              <div class="el-scrollbar__bar is-vertical">
                                <div
                                  class="el-scrollbar__thumb"
                                  style={{ transform: "translateY(0%)" }}
                                ></div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>{" "}
                        <p class="alertText" style={{ display: "none" }}>
                          Your company name is required
                        </p>{" "}
                        <p
                          class="alertText"
                          style={{ left: "276px", display: "none" }}
                        >
                          Your position is required
                        </p>
                      </div>{" "}
                      <label
                        class="el-checkbox schedule-checkbox is-checked"
                        style={{ color: "rgb(120, 120, 122)" }}
                      >
                        <span class="el-checkbox__input is-checked">
                          <span class="el-checkbox__inner"></span>
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            value=""
                          />
                        </span>
                        <span class="el-checkbox__label">
                          I would like to receive updates via whatsapp.{" "}
                        </span>
                      </label>{" "}
                      <button
                        type="button"
                        class="el-button submitButton el-button--primary"
                      >
                        {" "}
                        <span>Submit</span>
                      </button>
                    </div>{" "}
                    {/* <div
                      class="el-dialog__wrapper submit-dialog"
                      style={{ display: "block" }}
                    >
                      <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="dialog"
                        class="el-dialog"
                        style={{ marginTop: "15vh", width: "920px" }}
                      >
                        <div class="el-dialog__header">
                          <span class="el-dialog__title"></span>
                          <button
                            type="button"
                            aria-label="Close"
                            class="el-dialog__headerbtn"
                          >
                            <i class="el-dialog__close el-icon el-icon-close"></i>
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
