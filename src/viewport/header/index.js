import { Fragment } from "react";

import logo from "../../../src/assets/Logo.png";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <div className="header_top">
        <div className="top-bar">
          <div className="container">
            <div className="row d-flex align-items-center wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="col-sm-2">
                <a className="brand" href="Home.html">
                  <img src={logo} className="img-responsive" alt="logo" />
                </a>
              </div>
              <div className="col-sm-10">
                <ul className="header-info mb-0 d-flex justify-content-end list-unstyled">
                  <li>
                    <FaPhoneAlt />
                    <a href="tel: 1231234567">(123) 123-4567</a>
                  </li>
                  <li>
                    <FaEnvelope />
                    info@alexandria.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="col-md-7">
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <div class="hamburger-toggle">
                  <FaBars className="hamburger" />
                </div>
              </button>
              <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="nav navbar-nav flex-row">
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      Library
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      Video
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      Quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <form className="d-flex input-group justify-content-end">
                <button className="btn search" type="button">
                  <FaSearch />
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
