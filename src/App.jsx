import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import './Style.css'
import Facility from "./Facility.jsx";
import FooterComp from "./FooterComp.jsx";
import Doctors from "./Doctors.jsx";
import Cashless from "./Cashless.jsx";
import ContactUs from "./ContactUs.jsx";
import Cardiology from "./Cardiology.jsx";
import Gyna from "./Gyna.jsx";
export default function App(){
    return(
        <Router>
            <Navbar></Navbar>
            <Routes>
               <Route path="/" element={<Home></Home>}></Route>
               <Route path="/facility" element={<Facility></Facility>}></Route>
               <Route path="/doctors" element={<Doctors></Doctors>}></Route>
               <Route path="/cashless" element={<Cashless></Cashless>}></Route>
               <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
               <Route path="/cardiology" element={<Cardiology></Cardiology>}></Route>
               <Route path="/gynecology" element={<Gyna></Gyna>}></Route>
            </Routes>
          <FooterComp></FooterComp>
            </Router>
    )
}