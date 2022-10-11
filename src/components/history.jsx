import React from "react";
// import axios from "axios";
import image from "../../public/9f657f1478c95c75f42b647b00fa7146.png";
import {Link} from"react-router-dom";
function History(){
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

    <div className="text-center mx-auto mb-5">
                <h1 className="display-4 d-inline-block text-uppercase border-bottom border-5">History of requests</h1>
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </div>
    </>
)
}
export default History