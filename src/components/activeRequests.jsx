import React from "react";
import axios from "axios";
import image from "../../public/9f657f1478c95c75f42b647b00fa7146.png";
import {Link} from"react-router-dom";
function ActiveRequests(){
return (
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
                        <Link to="/homePage" className="nav-item nav-link active">Home</Link>
                        <Link to="/requests" className="nav-item nav-link">Active requests</Link>
                        <Link to="/history" className="nav-item nav-link">History</Link>
                        <Link to="/Contact" className="nav-item nav-link">About Us</Link>
                        <Link to="/" className="nav-item nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" >
            <h1 className="display-4 d-inline-block text-uppercase border-bottom border-5">Active requests</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                        <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger" >Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                        <p className="m-0">Click on "Accept" if you are able to receive a patient, you'll get all the informations about the patient once you accept the request.</p>
                        <div>
                        <button className="btn  btn-success">Accept</button>
                        <button className="btn  btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
)
}
export default ActiveRequests