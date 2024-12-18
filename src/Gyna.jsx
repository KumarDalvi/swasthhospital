import React from "react";
import BreadCumX from './BreadCumX.jsx'
export default function Gyna() {
    return (
        <>
            <BreadCumX page="cardiology" breadTitle1="Departments" breadTitle2="Obstetrics And Gynaecology"></BreadCumX>
            <div className="container mt-5 mb-5">
                <div className="row ">
                    <div className="col-md-3 ">
                        <h3>All Departments</h3>
                        <div className="border border-1 bg-white fw-medium shadow-lg rounded-2 pt-3 pb-3">
                            <div className="ms-2 p-2">
                                <p className="text-primary">Cardiology <i class="fa-solid fa-angle-right"></i></p>
                            </div>
                            <div className="ms-2 p-2">
                                <p>Obstetrics & Gynaecology <i class="fa-solid fa-angle-right"></i></p>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 border shadow">
                            <div className="row pt-3 pb-3">
                                <div className="col-4 text-center pt-3">
                                    <i class="fa-solid fa-headphones fs-1 text-primary"></i>
                                </div>
                                <div className="col-8">
                                    <p className="fw-medium">Emergency Cases</p>
                                    <p>0241 243 0530</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <img src="https://www.swasthyahospital.com/img/department/department22.jpg" className="w-100" alt="" />
                            </div>
                            <div className="col-12 mt-5 mb-3">
                                <h3>Obstetrics & Gynaecology</h3>
                                <p>The Obstetrics & Gynaecology department of offers the most advanced comprehensive care for all Gynaecological health conditions for patients of all ages. The department is known for its highly skilled maternity service with antenatal, postnatal and family planning clinics added. The labor ward is well equipped with delivery beds, Cardiac & Medicine, ultrasound machines, etc. The facilities for an epidural block for painless labor are also included At the request of the patient, the hospital also permits the patient's close family members to be near, at the time of delivery as Birth Companion</p>

                                <p>The infertility unit provides systematic analysis, evaluation and individualized treatment to beat infertility. Ultrasound Scanning, Doppler, IUI treatment, and Laparoscopic & Hysteroscopic surgeries are major specialties of this department.</p>

                            </div>
                            <div className="col-12">
                                <h4>Key Highlights</h4>
                                <ul>
                                    <li>UltraSound Scanning</li>
                                    <li>Colour Doppler scanning</li>
                                    <li>Total Infertility Evaluation for both males and females</li>
                                    <li>Controlled ovarian stimulation & IUI</li>
                                    <li>Facilities for Pap Smear liquid-based Cytology, Colposcope, and Mammogram. We offer to screen for Genital Tract Cancer and Breast Cancer</li>
                                    <li>All sorts of Gynaecological surgeries including conventional, open and vaginal surgeries like TAH, TVT-O, NDVH and Reconstructive surgeries for Pelvic Organ Prolapse</li>
                                    <li>Endoscopic surgeries - Laparoscopic and Hysteroscopic</li>
                                    <li>Diagnostic procedures</li>
                                    <li>Tubal sterilizations</li>
                                    <li>PCOD puncture</li>
                                    <li>Salpingectomy for ectopic pregnancy.</li>
                                    <li>Endometriosis surgery</li>
                                    <li>Myomectomy - Open and Laparoscopic</li>
                                    <li>Hysterectomy- Open / Vaginal</li>
                                    <li>Total Laparoscopic hysterectomy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}