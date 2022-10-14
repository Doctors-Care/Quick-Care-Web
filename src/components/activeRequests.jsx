import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../9f657f1478c95c75f42b647b00fa7146.png";
import { Link, useLocation } from "react-router-dom";
function ActiveRequests() {
    const location = useLocation()
    const [request, setRequest] = useState([])
    const [accept, setAccept] = useState(false)
    useEffect(() => {
        console.log("state",location.state)
        axios.get('http://localhost:3000/request/getAll')
            .then((result) => {
                result.data.map((infos) => { 
                    const request1 = {
                        key: infos.id,
                    }
                    axios.get(`http://localhost:3000/user/getOne/${infos.patientId}`)
                            .then((res) =>{request1.person = res.data; setRequest(prevRequest => {console.log("request",request1); return [...prevRequest, request1] })})
                            .catch((error) => console.log(error))
                })
            })
    .catch((err)=>console.log(err))
}, [])

const updateState = (state)=>{
    axios.post(`http://localhost:3000/hce/getOne`,state)
    .then((res)=>console.log(res.data))
    .catch((error) => console.log(error))
}

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
                            <Link to="/homePage" className="nav-item nav-link">Home</Link>
                            <Link to="/requests" className="nav-item nav-link active">Active requests</Link>
                            <Link to="/history" className="nav-item nav-link">History</Link>
                            <Link to="/Contact" className="nav-item nav-link">About Us</Link>
                            <Link to="/" className="nav-item nav-link "><i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link>
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
                    {request.map((element, index) => (
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon mb-4">
                                    <i className="fa fa-2x fa-ambulance text-white"></i>
                                </div>
                                <h4 className="mb-3 alert alert-danger">Emergency !</h4>
                                <h1 className="m-0">Name: {element.person.firstName} {element.person.lastName}</h1>
                                <h1 className="m-0">Age: {element.person.age}30</h1>
                                <h1 className="m-0">Address: {element.person.adress}</h1>
                                {accept && <div className="error">Accepted </div> }
                                 {!accept && <div> <button className="btn  btn-success" onClick={(event=> {event.preventDefault(); setAccept(true) })}>Accept</button>
                                    <button className="btn  btn-danger">Reject</button></div>}
                                </div>
                            </div>

                    ))}
                </div>
            </div>
        </div>

    </>
)
}
export default ActiveRequests