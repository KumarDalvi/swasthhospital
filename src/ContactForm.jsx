import React from "react";
export default function ContactForm() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 mt-3">
            <h3>Leave Us Message</h3>
            <div className="row">
              <div className="col-md-6 mt-3">
                <input
                  className="input form-control"
                  placeholder="First Name *"
                />
              </div>
              <div className="col-md-6 mt-3">
                <input
                  className="input form-control"
                  placeholder="Last Name *"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <input
                  className="input form-control"
                  placeholder="Email *"
                />
              </div>
              <div className="col-md-6 mt-3">
                <input
                  className="input form-control"
                  placeholder="Phone *"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <select className="form-select">
                  <option selected>Select Subject *</option>
                  <option value="Dr. Abhijit Pathak">Dr. Abhijit Pathak</option>
                  <option value="Dr. Renuka Pathak">Dr. Renuka Pathak</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Message *"
                    id="floatingTextarea2"
                    style={{"height": "100px"}}
                  ></textarea>
                  <label for="floatingTextarea2">Message *</label>
                </div>
              </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <button className="btn btn-primary btn-lg">Submit Message</button>
                </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Address</h3>
            <div className="row mt-5">
            <div className="col-2 float-start">
            <i class="fa-solid fa-location-dot fs-5 float-end text-primary"></i>
            </div>
            <div className="col-10">
                <p>Annabhau Sathe Chowk, Laltaki, Ahmednagar, Maharashtra 414001</p>
            </div>
            <div className="col-2 float-start">
            <i class="fa-regular fa-envelope fs-5 float-end text-primary"></i>
            </div>
            <div className="col-10">
                <p>swasthyahospitalcashless@gmail.com</p>
            </div>
            <div className="col-2 float-start">
            <i class="fa-solid fa-phone-flip fs-5 float-end text-primary"></i>
            </div>
            <div className="col-10">
                <p>0241-2344301, 2341311, 2430530</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
