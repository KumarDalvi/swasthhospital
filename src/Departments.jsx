import React from "react";
export default function Departments() {
    return (
        <>
            <div className="container-fluid bg-body-secondary">
                <div className="container mt-5 mb-5 ">
                    <div className="row">
                        <div className="col-12 text-center mt-5 mb-5">
                            <h1>Our Departments</h1>
                            <p>Dedicated Services</p>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card" >
                                <img src="https://www.swasthyahospital.com/img/department/department4.jpg" className="card-img-top" alt="..."  style={{"height":"200px"}}/>
                                <div className="card-body">
                                    <h3>Cardiology</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-md-4  ">
                                        <img src="https://www.swasthyahospital.com/img/team/team22.png" className="img-fluid rounded-circle bg-dark-subtle" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Abhijit Pathak</h5>
                                            <p className="card-text">Consultant Cardiologist</p>
                                            <p className="card-text">M.D (medicine), D.N.B, D.M (Cardiology)</p>
                                            <button className="btn btn-primary me-2">View Profile</button>
                                            <button className="btn btn-primary">Make an Appintment</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" >
                                <img src="https://www.swasthyahospital.com/img/department/department3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3>Obstetrics & Gynaecology</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="https://www.swasthyahospital.com/img/team/team23.png" className="img-fluid rounded-circle bg-dark-subtle" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Renuka A Pathak</h5>
                                            <p className="card-text">Consultant Obstetrician, Gynaecologist</p>
                                            <p className="card-text">M.D , DNB (OBGYN)</p>
                                            <button className="btn btn-primary me-2">View Profile</button>
                                            <button className="btn btn-primary ">Make an Appintment</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}