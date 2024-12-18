import React from "react";
import BreadCumX from './BreadCumX.jsx'
export default function Cardiology() {
    return (
        <>
            <BreadCumX page="cardiology" breadTitle1="Departments" breadTitle2="Cardiology"></BreadCumX>
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
                                <img src="https://www.swasthyahospital.com/img/department/department21.jpg" className="w-100" alt="" />
                            </div>
                            <div className="col-12 mt-5 mb-3">
                                <h3>Cardiology</h3>
                                <p>The hospital is well equipped with all the modern equipments to ensure treatment for the patients with any cardiac problem. The team of Cardiologists, Cath Lab and non-invasive lab technicians have wide experience in the management of all complex cardiac problems. The latest techniques in the field of Pacing and Coronary angioplasties are being routinely performed at the Hospital.</p>

                                <p>We had a dream … It was our aim to provide the most sophisticated Cardiac Care at the most affordable cost to the patients in and around Ahmednagar. 10 yr down the lane, we have been successful in our goal and have grown into the most trusted Heart Hospital in this part of the country.</p>

                                <p>Patients come to our hospital from all over the district state. `Safe and Ethical Heart treatment` is our motto and we strive to maintain the highest standards of cardiac care anywhere in the world.</p>

                                <p>All this has been possible because of You. Your faith in us has been our primary motivation and our inspiration to work harder. Our focus has always your satisfaction and the results show that our stand has been vindicated. It has made us more humble and has strengthened our resolve to do better than what we have achieved. Not to rest on Laurels but to do dream more …</p>
                            </div>
                            <div className="col-12">
                                <ul>
                                    <li>Echo / Doppler</li>
                                    <li>Tread Mill Test</li>
                                    <li>Holter Monitoring</li>
                                </ul>

                                <h4>INVASIVE CARDIOLOGY</h4>
                                <ul>
                                    <li>Coronary Angiography</li>
                                    <li>Coronary Angioplasty</li>
                                    <li>Peripheral Angioplasty including Carotid Stenting</li>
                                    <li>Dilatation / Stenting of Coarctation of Aorta</li>
                                    <li>Pacemakers / Implants</li>
                                    <li>Valvuloplasty – Mitral / Aortic / Pulmonary</li>
                                    <li>Device Closure of PDA / ASD etc</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}