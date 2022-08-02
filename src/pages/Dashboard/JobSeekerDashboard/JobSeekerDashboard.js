import React, { useState } from "react";
import "./JobSeekerDashboard.css";
import { NavLink } from "react-router-dom";
import spider from "../../../assets/images/spider-removebg-preview3.png";
import userIcon from "../../../assets/images/user.png";
import palakSharm from "../../../assets/images/palak-sharma.2ab3146.png";
import pencilMan from "../../../assets/images/pencil-man-removebg-preview.png";

const JobSeekerDashboard = () => {
  const [copySuccess, setCopySuccess] = useState(null);
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a
              href="/"
              aria-current="page"
              className="navbar-brand menu-link-exact-active menu-link-active"
            >
              <img width="100px" height="80px" src={spider} alt="" />
            </a>
            <li className="nav-item">
              <NavLink
                to="/job-seeker-profile"
                className={({ isActive }) =>
                  isActive
                    ? "navlink-active text-decoration-none"
                    : "navlink-inactive text-decoration-none"
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/job-seeker-education"
                className={({ isActive }) =>
                  isActive
                    ? "navlink-active text-decoration-none"
                    : "navlink-inactive text-decoration-none"
                }
              >
                Education
              </NavLink>
            </li>
          </div>

          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarScroll" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link">
              <li className="nav-item">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback "></span>
                  <input
                    type="text"
                    className="form-control input"
                    placeholder="Search"
                  />
                </div>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-bell text-light ms-3"></i>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-cart-shopping text-light ms-3"></i>
              </li>

              <li className="nav-item">
                <div className="ms-3">
                  <img
                    height="30px"
                    width="30px"
                    src={userIcon}
                    alt="user photo"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="pt-5 profile-overview">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* left-column-1st-div */}
              <div className="border border-secondary rounded py-4 px-3">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="d-flex justify-content-between align-items-center px-3">
                    <img src={palakSharm} alt="" />
                    <div className="ps-0 ps-lg-2 ps-md-2">
                      <h5 className="text-success fw-bolder mb-0">
                        Diana Rose <span>...</span>
                      </h5>
                      <p className="mb-0">Professional title</p>
                      <p>
                        <span>
                          <i className="fa-solid fa-location-dot pe-2"></i>
                        </span>
                        New York-09.30 AM
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <h6 className="fw-bolder">
                      <span className="text-success">
                        <i className="fa-solid fa-award"></i> Top Rated
                      </span>
                    </h6>
                    <h6>
                      <span>Top 5% in Android Dev</span>
                    </h6>
                    <h6>
                      <span>Top 20% in People Mgmt</span>
                    </h6>
                  </div>
                </div>

                <h6 className="px-3 pt-3 fw-bolder">Overview</h6>
                <p className="px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  rerum animi quam ipsa similique consequatur nemo dolorem
                  reprehenderit iure. Temporibus, atque iusto? Dicta corrupti
                  unde at molestiae exercitationem odit expedita?
                </p>
                <div className="d-flex pt-3">
                  <div className="text-center">
                    <h6 className="fw-bolder">6Y 8M</h6>
                    <p className="text-secondary">Total Experience</p>
                  </div>
                  <div className="text-center ps-4">
                    <h6 className="fw-bolder">10.3 LPA</h6>
                    <p className="text-secondary">Current CTC</p>
                  </div>
                  <div className="text-center ps-4">
                    <h6 className="fw-bolder">Intermediate joiner</h6>
                    <p className="text-secondary">Search Level</p>
                  </div>
                  <div className="text-center ps-4">
                    <h6 className="fw-bolder">...</h6>
                    <p className="text-secondary">Current CTC</p>
                  </div>
                </div>
              </div>

              {/* left-column-2nd-div */}
              <div className="py-4 my-4 border border-secondary rounded">
                <div className="d-flex justify-content-between align-items-center  px-4">
                  <h6 className="fw-bolder">Work history</h6>
                  <select
                    className="custom-select div-bg border border-secondary rounded text-light px-2 py-1"
                    show-tick
                    placeholder="Short by:Latest"
                    style={{ minWidth: "220px", maxWidth: "40%" }}
                  >
                    <option className="special">Short by:Latest</option>
                    <option className="special">Burger</option>
                    <option className="special">Ice Cream</option>
                    <option className="special">Fried Potatoes</option>
                  </select>
                </div>
                <div className="px-4 py-3 ">
                  <p>
                    Job name1{" "}
                    <span className="text-secondary ps-2">
                      <i className="fa-solid fa-calendar"></i> Mar 2021 -
                      present
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus quo repellat doloribus consequatur perferendis
                    aliquid, dolore reiciendis aspernatur, iure tenetur dolorum
                    eveniet accusantium quae. Expedita odit quo nihil
                    necessitatibus ex.
                  </p>
                </div>
                <hr className="mx-3 " />
                <div className="px-4 py-3 ">
                  <p>
                    Job name2{" "}
                    <span className="text-secondary ps-2">
                      <i className="fa-solid fa-calendar"></i> Mar 2021
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quas qui sapiente rem repellendus animi vel commodi iste
                    quasi cupiditate iusto, reprehenderit fugiat! Perferendis
                    accusamus laborum et voluptatem dicta. Maxime, autem.
                  </p>
                </div>
              </div>

              {/* left-column-3rd-div */}
              <div className="py-4 my-4 border border-secondary rounded">
                <div className="d-flex justify-content-between align-items-center  px-4">
                  <h6 className="fw-bolder">Education</h6>
                  <select
                    className="custom-select div-bg bg-secondary border border-secondary rounded text-light px-2 py-1"
                    show-tick="true"
                    style={{ minWidth: "220px", maxWidth: "40%" }}
                  >
                    <option className="special">Short by:Latest</option>
                    <option className="special">Burger</option>
                    <option className="special">Ice Cream</option>
                    <option className="special">Fried Potatoes</option>
                  </select>
                </div>
                <div className="px-4 py-3 ">
                  <h6 className="fw-bolder">Course</h6>
                  <p>
                    <span className="text-secondary">
                      <i className="fa-solid fa-calendar"></i> Mar 2021 -
                      present
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus quo repellat doloribus consequatur perferendis
                    aliquid, dolore reiciendis aspernatur, iure tenetur dolorum
                    eveniet accusantium quae. Expedita odit quo nihil
                    necessitatibus ex.
                  </p>
                </div>
                <hr className="mx-3 " />
                <div className="px-4 py-3 ">
                  <p>
                    Job name2{" "}
                    <span className="text-secondary ps-2">
                      <i className="fa-solid fa-calendar"></i> Mar 2021
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quas qui sapiente rem repellendus animi vel commodi iste
                    quasi cupiditate iusto, reprehenderit fugiat! Perferendis
                    accusamus laborum et voluptatem dicta. Maxime, autem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="seeker-profile-left border border-secondary rounded py-4">
                <div class="px-lg-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="fw-bolder">Profile Activity</h6>
                    <p>High</p>
                  </div>
                  <button class="seeker-btn mb-3">Message</button>
                  <p class="text-end mb-0">4</p>
                  <p class="text-end">5</p>
                  <button class="seeker-btn">Recent visitors</button>
                </div>
                <h6 class="pt-4 pe-2 ps-md-0 px-lg-2 fw-bolder">
                  Total Views in Last 30 Days
                </h6>
                <div class="py-4 px-0 ps-md-0 px-lg-3">
                  <h6 class="fw-bolder">Certificates</h6>
                  <p>Lorem ipsum dolor sit amet listi piki nonte.</p>
                </div>
                <div class="px-0 linked-in-box ps-md-0 px-lg-3">
                  <h6 class="fw-bolder">Linked In</h6>
                  <input
                    class="w-100 border border-secondary rounded ps-2 py-1"
                    placeholder="https://color-design.com"
                    type="text"
                  />
                  <br />
                  <div class="d-flex align-items-center mt-2 ps-md-0">
                    <button class="btn btn-text text-secondary px-0 py-0 ">
                      Copy the link
                    </button>
                    <span class="ms-2 text-success d-inline-block"></span>
                  </div>
                </div>
              </div>
              {/* <div className="seeker-profile-left border border-secondary rounded py-4">
                <div className="px-lg-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="fw-bolder">Profile Activity</h6>
                    <p>High</p>
                  </div>
                  <button className="seeker-btn mb-3">Message</button>
                  <p className="text-end mb-0">4</p>
                  <p className="text-end">5</p>
                  <button className="seeker-btn">Recent visitors</button>
                </div>
                <h6 className="pt-4 px-2 ps-md-0 fw-bolder">
                  Total Views in Last 30 Days
                </h6>
                <div className="py-4 px-3 ps-md-0">
                  <h6 className="fw-bolder">Certificates</h6>
                  <p>Lorem ipsum dolor sit amet listi piki nonte.</p>
                </div>

                <div className="px-3 linked-in-box ps-md-0">
                  <h6 className="fw-bolder">Linked In</h6>
                  <input
                    className="w-100 border border-secondary rounded ps-2 py-1"
                    placeholder="https://color-design.com"
                    type="text"
                  />
                  <br />
                  <div className="d-flex align-items-center mt-2 ps-md-0">
                    <button
                      className="btn btn-text text-secondary px-0 py-0 "
                      onClick={(e) =>
                        copyToClipBoard("https://color-design.com")
                      }
                    >
                      Copy the link
                    </button>
                    <span className="ms-2 text-success d-inline-block">
                      {copySuccess && copySuccess}
                    </span>
                  </div>
                </div>
              </div> */}

              <div className="bg-info pb-5 pt-1 rounded mt-4">
                <div>
                  <img src={pencilMan} alt="" />
                </div>
                <div className="px-3 text-center">
                  <h6 className="fw-bolder">incuininnta ea magna.</h6>
                  <p className="text-secondary">
                    Lorem ipsum dolor, sit amet consectetur elit. Lorem ipsum
                    dolor sit.{" "}
                  </p>
                  <button className="w-50 btn btn-success d-inline-block text-light">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekerDashboard;
