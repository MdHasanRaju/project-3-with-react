import React from "react";
import "./Navbar.css";
import logo from "../../../assets/icons/hirect-logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        
      >
        <div class="container" >
          <a
            href="/"
            aria-current="page"
            class="navbar-brand nuxt-link-exact-active nuxt-link-active"
            
          >
            <img src={logo} alt=""  />
          </a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            
          >
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div
            id="navbarScroll"
            class="collapse navbar-collapse"
            
          >
            <ul
              class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link"
              
            >
              <li class="nav-item" >
                <a
                  href="/"
                  aria-current="page"
                  class="nav-link nuxt-link-exact-active nuxt-link-active"
                  
                >
                  Home
                </a>
              </li>
              <li class="nav-item" >
                <a href="/aboutus" class="nav-link" >
                  About us
                </a>
              </li>
              <li class="nav-item" >
                <a href="/features-in" class="nav-link" >
                  {" "}
                  Features
                </a>
              </li>
              <li class="nav-item" >
                <a href="/connect" class="nav-link" >
                  Recruiters
                </a>
              </li>
              <li class="nav-item" >
                <a href="/job-seeker" class="nav-link" >
                  Job Seekers
                </a>
              </li>
              <li class="nav-item" >
                <a
                  href="https://www.hirect.in/blog/"
                  class="nav-link"
                  
                >
                  {" "}
                  Blog
                </a>
              </li>
              <li class="nav-item" >
                <button
                  type="button"
                  class="btn default-btn button-sm download-btn"
                  
                >
                  Download App
                </button>
              </li>
              <li class="nav-item" >
                <button
                  type="button"
                  class="btn bordered-btn button-sm watch-demobtn"
                  
                >
                  <span class="text" >
                    Watch demo
                  </span>{" "}
                  <span class="icon" >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-play"
                      
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        
                        class=""
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;