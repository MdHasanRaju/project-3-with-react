import React from "react";
import "./Navbar.css";
import logo from "../../../assets/images/spider-green-removebg-preview.png";
import spiderLogo from "../../../assets/images/spider-removebg-preview3.png";
import spiderLogo2 from "../../../assets/images/spider-removebg-preview.png";
import spiderLogo3 from "../../../assets/images/spider-purple-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Login/Login";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a
            href="/"
            aria-current="page"
            className="navbar-brand menu-link-exact-active menu-link-active"
          >
            <img width="100px" height="80px" src={spiderLogo2} alt="" />
          </a>
          {/* <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button class="navbar-toggler ml-auto custom-toggler" 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div id="navbarScroll" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link">
              <li className="nav-item">
                {/* <a
                  href="/"
                  aria-current="page"
                  className="nav-link menu-link-exact-active menu-link-active"
                  
                >
                  Home
                </a> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="aboutus"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  About us
                </NavLink>
              </li> */}
              <li className="nav-item"> 
                <NavLink
                  to="features-in"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink
                  to="connect"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  Recruiters
                </NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink
                  to="job-seeker"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  Job Seekers
                </NavLink>
              </li>
              {/* <li className="nav-item"> 
                <NavLink
                  to="recruiter-dashboard"
                  className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-inactive"
                  }
                >
                  Recruiter Dashboard
                </NavLink>
              </li> */}

              <li className="nav-item">
              <button
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#login-modal"
                  className="btn default-btn button-sm download-btn"
                >
                  Login
                </button> 
              </li>
              {/* <li className="nav-item">
                <button
                  type="button"
                  className="btn bordered-btn button-sm watch-demobtn"
                >
                  <span className="text">Watch demo</span>{" "}
                  <span className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-play"
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        className=""
                      ></path>
                    </svg>
                  </span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Login></Login>
    </>
  );
};

export default Navbar;
