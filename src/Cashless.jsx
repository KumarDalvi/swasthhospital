import React from "react";
import BreadCumb from "./BreadCumb";
import CashlessFacility from "./CashlessFacility.jsx";
import TpaServices from './TpaServices.jsx'
import GovtServices from './GovServices.jsx'
import HealthServices from './HealthServices.jsx'
export default function Cashless() {
    return (
        <>
            <BreadCumb page="Cashless Facility" breadTitle="cashless"></BreadCumb>
            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <h3>Cashless Facility Available</h3>
                        <ol type="1" className="list-group list-group-numbered table">


                            {
                                CashlessFacility.map((list) => {
                                    return (
                                        <li className="fs-5 list-group-item list-group-item-action list-group-item-light">{list.title}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <h3>TPA Services</h3>
                        <ol type="1" className="list-group list-group-numbered table">


                            {
                                TpaServices.map((ser) => {
                                    return (
                                        <li className="fs-5 list-group-item list-group-item-action list-group-item-light">{ser.title}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <h3>Government Health Scheme Available</h3>
                        <ol type="1" className="list-group list-group-numbered table">


                            {
                                GovtServices.map((govserv) => {
                                    return (
                                        <li className="fs-5 list-group-item list-group-item-action list-group-item-light">{govserv.title}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <h3>Pre Policy Health Checkup</h3>
                        <ol type="1" className="list-group list-group-numbered table">


                            {
                                HealthServices.map((hcs) => {
                                    return (
                                        <li className="fs-5 list-group-item list-group-item-action list-group-item-light">{hcs.title}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}