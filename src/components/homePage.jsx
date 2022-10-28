import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import moment from "moment"
import image from "../9f657f1478c95c75f42b647b00fa7146.png";
import pic from "../Automation-In-Healthcare-Achieving-Operational-Efficiency-At-Scale-blog-feature-nvd.jpg";

function HomePage() {
  const location = useLocation();
  useEffect(() => console.log("location home page", location.state));
  return (
    <>
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a className="navbar-brand mt-2 mt-lg-0" href="/homePage">
              <img
                src={image}
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              Quick Care
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link
                  to="/homePage"
                  state={location.state}
                  className="nav-item nav-link active"
                >
                  Home
                </Link>
                <Link
                  to="/requests"
                  state={location.state}
                  className="nav-item nav-link "
                >
                  Active requests
                </Link>
                <Link
                  to="/history"
                  state={location.state}
                  className="nav-item nav-link "
                >
                  History
                </Link>
                <Link
                  to="/Contact"
                  state={location.state}
                  className="nav-item nav-link "
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  state={location.state}
                  className="nav-item nav-link "
                  onClick={() => {
                    axios.get("http://127.0.0.1:3001/hce/logout");
                  }}
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>Log Out
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-start">
              <div className="col-lg-8 text-center text-lg-start">
                <img className="position-relative  rounded" src={pic} alt=" loading"/>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                  Welcome To Quick Care
                </h5>
                <h1 className="display-1 text-white mb-md-4">
                  We Believe that everyone Have Right to Great HealthCare
                </h1>
                <div className="pt-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src={pic} alt=" loading"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mb-4">
                  <h5 className="d-inline-block text-dark text-primary text-uppercase border-bottom border-5">
                    Our Objective
                  </h5>
                  <h1 className="display-4">
                    Faster interventions to save Lives
                  </h1>
                </div>
                <p className="text-dark mb-6">
                  Automation has played a major part in the technological
                  revamping of healthcare, whether it is integrating digital
                  technology, advancing procedures, or introducing otherwise
                  unthinkable competence and productivity. Eventually, this
                  results in the patients receiving better services as staff
                  hands are discharged from more administrative intensive work
                  rather than the human-facing element of it. Thus, making
                  procedures more productive and worthwhile.
                </p>
              </div>
            </div>
          </div>
        </div>

       

        <div className="text-center mx-auto mb-5">
    
        
        
         
        </div>

        {/* <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>B24, Technopark Elghazela ariana, 2088</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>moez.temimi@yahoo.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+216 25 412 236</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                        <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                        <a className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Via Social Media:</h4>
                    <div className="d-flex"> 
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-github"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div> */}
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Informations
                </h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary me-3"></i>B24,
                  Technopark Elghazela ariana, 2088
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  moez.temimi@yahoo.com
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt text-primary me-3"></i>+216 25
                  412 236
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Via Social Media:
                </h4>
                <div className="d-flex">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    href="/Contact" 
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    href="/Contact" 
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    href="/Contact" 
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              {/* <div className="col-md-6 text-right text-md-end">
                    
                    <p className="md-0"> <a className="text-primary" href="#"></a></p>
                </div> */}
              <div className="col-md-6 text-left ">
                <p className="mb-0">
                  &copy;{" "}
                  <a className="text-primary" href="/Contact" >
                    RBK
                  </a>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
