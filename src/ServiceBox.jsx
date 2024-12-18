import React from "react";
export default function ServiceBox() {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 d-flex justify-content-center ps-0 pe-0 ">
                        <div className=" card bg-primary text-white text-center pt-5 pb-5" style={{ "width": "18rem" }}>
                            <i class="fa-solid fa-user-doctor  fs-1"></i>
                            <div className="card-body">
                                <h5 className="card-title">Moden Hospital</h5>
                                <p className="card-text">Provide advanced & scientific, curative, preventive healthcare.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ps-0 pe-0 ">
                        <div className=" card bg-primary text-white text-center pt-5 pb-5" style={{ "width": "18rem" }}>
                        <i class="fa-solid fa-wheelchair-move fs-1"></i>
                            <div className="card-body">
                                <h5 className="card-title">Expert Doctors</h5>
                                <p className="card-text">Give you the best treatment to cure your diseases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ps-0 pe-0 ">
                        <div className=" card bg-primary text-white text-center pt-5 pb-5" style={{ "width": "18rem" }}>
                        <i class="fa-solid fa-clipboard-list fs-1"></i>
                            <div className="card-body">
                                <h5 className="card-title">Cardiac Ambulance</h5>
                                <p className="card-text">Patients suffering from cardiac diseases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ps-0 pe-0 ">
                        <div className=" card bg-primary text-white text-center pt-5 pb-5" style={{ "width": "18rem" }}>
                        <i class="fa-solid fa-user-nurse fs-1"></i>
                            <div className="card-body">
                                <h5 className="card-title">Emergency</h5>
                                <p className="card-text">We work 24*7 to provide quality care at every moment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}