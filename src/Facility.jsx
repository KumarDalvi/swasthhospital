import React from "react";
import BreadCumb from "./BreadCumb.jsx";
import './Style.css'
import GalleryCards from "./GalleryCards.jsx";
import Facilitiesdata from './Facilitiesdata.jsx'

export default function Facility(){

    return(

<>
<BreadCumb page="Facilities" breadTitle="Facilities"></BreadCumb>
<div className="container">
    <div className="row">
    {
    Facilitiesdata.map((val)=>{
     return(
        <GalleryCards img={val.img} title={val.title} desc={val.desc}></GalleryCards>
     )
    })
}
    </div>
</div>
</>


    )
}