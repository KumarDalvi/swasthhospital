import React from "react";

export default function BreadCumbX(props) {
    return (
        <>
            <div className="container-fluid bg-dark pt-5 w-100 Bg_BreadCum">
                <div className="container">
                <div className="row  pb-2">
                    <div className="col-12 ">
                        <nav aria-label="breadcrumb text-center">
                        <h1>{props.page}</h1>
                            <ol class="breadcrumb ">
                              
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{props.breadTitle1}</li>
                                <li class="breadcrumb-item active" aria-current="page">{props.breadTitle2}</li>
                            
                            </ol>
                        </nav>
                    </div>
                </div>
                </div>
            </div>

        </>
    )

}