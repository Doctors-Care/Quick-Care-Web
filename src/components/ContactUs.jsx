import React from "react";
// import axios from "axios";
import image from "../9f657f1478c95c75f42b647b00fa7146.png";
import {Link, useLocation} from "react-router-dom"
function ContactUs(){
    const location = useLocation()
return(
    <>
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
      <img
            src={image}
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        Quick Care
      </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <Link to="/homePage" state={location.state} className="nav-item nav-link">Home</Link>
                        <Link to="/requests" state={location.state} className="nav-item nav-link">Active requests</Link>
                        <Link to="/history" state={location.state} className="nav-item nav-link">History</Link>
                        <Link to="/Contact" state={location.state} className="nav-item nav-link active">Contact Us</Link>
                        <Link to="/" className="nav-item nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="container-fluid pt-5">
    <div class="container">
        <div class="text-center mx-auto mb-5" >
            <h5 class="d-inline-block display-4 text-uppercase border-bottom border-5">Any Questions?</h5>
            <h1 class="display-4">Please Feel Free To Contact Us</h1>
        </div>
        <div class="row g-5 mb-5">
            <div class="col-lg-4">
                <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" >
                    <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" >
                        <i class="fa fa-2x fa-location-arrow text-white" ></i>
                    </div>
                    <h6 class="mb-0">B24, Technopark Elghazela ariana, 2088</h6>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" >
                    <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" >
                        <i class="fa fa-2x fa-phone text-white" ></i>
                    </div>
                    <h6 class="mb-0">+216 25 412 236</h6>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" >
                    <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" >
                        <i class="fa fa-2x fa-envelope-open text-white" ></i>
                    </div>
                    <h6 class="mb-0">moez.temimi@yahoo.com</h6>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12" >
                <div class="position-relative h-200">
                    <iframe class="position-relative w-100 h-200"
                        src="https://maps.google.com/maps?q=36.894284,10.186790&hl=fr;&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <div class="row justify-content-center position-relative" >
            <div class="col-lg-8">
                <div class="bg-white rounded p-5 m-5 mb-0">
                    <form>
                        <div class="row g-3">
                            <div class="col-12 col-sm-6">
                                <input type="text" class="form-control bg-light border-0" placeholder="Your Name" />
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="email" class="form-control bg-light border-0" placeholder="Your Email" />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0" placeholder="Subject" />
                            </div>
                            <div class="col-12">
                                <textarea class="form-control bg-light border-0" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default ContactUs;