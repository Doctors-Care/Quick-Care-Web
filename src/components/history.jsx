import React, { useEffect, useState } from "react";
// import axios from "axios";
import image from "../9f657f1478c95c75f42b647b00fa7146.png";
import {Link} from"react-router-dom";
import axios from "axios";
import moment from "moment/moment";
function History(){
  const [requests, setRequests] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/request/getAll")
      .then((result) => {
        
          setRequests(result.data)
            
          
        })
      .catch((err) => console.log(err));
  }, []);
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
                        <Link to="/homePage" className="nav-item nav-link ">Home</Link>
                        <Link to="/requests" className="nav-item nav-link">Active requests</Link>
                        <Link to="/history" className="nav-item nav-link active">History</Link>
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
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  {requests.map((request)=>{return(
    <tr>
      <td>{request.patient.firstName}</td>
      <td>{request.patient.lastName}</td>
      <td>---</td>
      <td>{ moment(request.createdAt).format("LL")}</td>
      
    </tr>
   ) })}
  </tbody>
</table>

    </div>
    </>
)
}
export default History