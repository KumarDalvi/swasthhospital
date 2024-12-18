import React from "react";
import Facilitiesdata from './Facilitiesdata.jsx'
export default function GalleryCards(props) {
    return (
        <>
            
           
                <div className="col-md-4 text-center ">
                        <div className="card  gallerycardbox mt-3 mb-3">
                            <img src={props.img} className="card-img" alt="..." />
                            <div className="card-img-overlay card_hover ">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.desc}</p>
                                <p className="card-text"><i className="fa-solid fa-clipboard-list fs-2"></i></p>
                            </div>
                        </div>
                    </div>                 
            
               
        </>
    )
}