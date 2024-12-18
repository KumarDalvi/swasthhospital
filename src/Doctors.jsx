import React from "react";
import BreadCumb from "./BreadCumb";
export default function Doctors(){
return(
    <>
    <BreadCumb page="doctors" breadTitle="doctors"></BreadCumb>
    <div className="container-fluid mt-5 mb-5">
        <div className="container">
        <div className="row">
            <div className="col-md-6">
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
                        <div className="col-md-6">
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
        <div className="container-fluid mt-5 mb-5">
        <div className="row">
            <div className="col-12">
                <h1>Panel Consultant</h1>
                <ol type="1">
                            <li>Dr Saiprasad shinde.	(DM Nephrologist)</li>
                </ol>
            </div>
        </div>
    </div>
        </div>
    </div>
    
    </>
)
}