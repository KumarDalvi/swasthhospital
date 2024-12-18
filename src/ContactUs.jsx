import React from "react";
import BreadCumb from "./BreadCumb";
import ContactForm from "./ContactForm";
export default function ContactUs(){
    return(
        <>
          <BreadCumb page="Contact Us" breadTitle="contactUs"></BreadCumb>
          <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.144413021304!2d74.734677!3d19.104488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07d76ddc4a1%3A0x7e8a5d2a19c41a33!2sSwasthya%20Hospital%20And%20Medical%20Research%20Center!5e0!3m2!1sen!2sin!4v1724598334669!5m2!1sen!2sin"  height="450" className="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
          <ContactForm></ContactForm>
        </>
    )
}