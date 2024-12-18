import React from "react";
export default function FooterComp() {
    return (
        <>

            <div className="container-fluid bg-dark pt-5 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://www.swasthyahospital.com/img/footerlogo.png" />
                            <p>Wide range of medical services like diagnostic, treatment, speciality clinics, ICU units, emergency rooms & surgery.</p>
                            <div className="row">
                                <div className="col-12">

                                    <div className="row pb-5">

                                        <div className="col-2 mt-2">
                                            <i class="fa-solid fa-location-dot "></i>
                                        </div>
                                        <div className="col-10 mt-2">
                                            Annabhau Sathe Chowk, Laltaki, Ahmednagar 414001
                                        </div>

                                        <div className="col-2 mt-2">
                                            <i class="fa-solid fa-phone-flip"></i>
                                        </div>
                                        <div className="col-10 mt-2">
                                            0241 243 0530
                                        </div>

                                        <div className="col-2 mt-2">
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="col-10 mt-2">
                                            swasthyahospitalcashless@gmail.com
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3>Departments</h3>
                            <ul>
                                <li className="footer_links fs-5">Cardiology</li>
                                <li className="footer_links fs-5">Obstetrics & Gynaecology</li>
                            </ul>
                        </div>
                        <div className="col-md-3">

                            <ul>
                                <h3>Quick Links</h3>
                                <li className="footer_links fs-5">Home</li>
                                <li className="footer_links fs-5">Facilities</li>
                                <li className="footer_links fs-5">Doctors</li>
                                <li className="footer_links fs-5">Cashless</li>
                                <li className="footer_links fs-5">Contact Us</li>
                                <li className="footer_links fs-5">24/7 Support</li>
                            </ul>
                        </div>
                        <div className="col-md-3">

                            <ul>
                                <h3>Facilities</h3>
                                <li className="footer_links fs-5">Cashless Facilities</li>
                                <li className="footer_links fs-5">Cath Lab</li>
                                <li className="footer_links fs-5">Opreation Theater</li>
                                <li className="footer_links fs-5">ICU</li>
                                <li className="footer_links fs-5">Cauallty</li>
                                <li className="footer_links fs-5">2D Echo</li>
                                <li className="footer_links fs-5">Stress Test</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="row bg-dark bg-gradient shadow-lg pt-4 pb-4">
                    <div className="col-md-4">
                        <h2 className="float-start">Follow Us:</h2>
                        <i class="fa-brands fa-facebook-f ms-3 me-3 pt-2 fs-5"></i>
                        <i class="fa-brands fa-twitter me-3 pt-2 fs-5"></i>
                        <i class="fa-brands fa-youtube me-3 pt-2 fs-5"></i>

                    </div>
                    <div className="col-md-4 text-center">
                        <h4> Stay informed and healthy</h4>
                    </div>
                    <div className="col-md-4 pe-5">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" type="button" id="button-addon2">SIGN UP !</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center pt-3">
                        <p className="fs-5">Copyright @ 2021 Swasthya Hospital. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        </>
    )
}