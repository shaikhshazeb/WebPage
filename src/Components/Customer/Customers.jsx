import React from "react";
import "./Customer.css";
import m from "../../assets/m1.svg";
import m22 from "../../assets/m2.svg";
import m33 from "../../assets/m3.svg";
import m44 from "../../assets/m44.svg";
import bkl from "../../assets/bkl.svg";
import "./CustomerMedia.css";
const Customers = () => {
  return (
    <div className="customers">
      <div id="main-hdd">
        <big>
          <h1>
            Meet our <span> mentor</span> and <span>advisor.</span>
          </h1>
        </big>
        <p>
          Kita akan berlari ditemani para mentor dan advisor dari
          Beautieslife.id.
        </p>
      </div>
      <div className="Carrds2">
        <div class="card02">
          <img src={m} alt="" className="ig9" />
        </div>
        <div class="card02">
          <img src={m22} alt="" className="ig9" />
        </div>
        <div class="card02">
          <img src={m33} alt="" className="ig9" />
        </div>
        <div class="card02">
          <img src={m44} alt="" className="ig9" />
        </div>
        <div class="card02">
          <img src={m33} alt="" className="ig9" />
        </div>
      </div>
      <div className="nam">
        <div id="name">
          <big>Chantal Shelburne</big>
          <p>Founder Beautieslife.id</p>
          Our Mentor
        </div>

        <div id="name">
          <big>Kylee Danford</big>
          <p>Founder & CDO Syabany.com</p>
          Our Mentor
        </div>
        <div id="name">
          <big>Lauralee Quintero</big>
          <p>Leader Nasional JAFRA Executive</p>
          Our Mentor
        </div>
        <div id="name">
          <big>Freida Varnes</big>
          <p>Founder Dakwahyu & Wadah Hikmah</p>
          Our Mentor
        </div>
        <div id="name">
          <big>Chantal Shelburne</big>
          <p>Founder Beautieslife.id</p>
          Our Mentor
        </div>
      </div>
    </div>
  );
};

export default Customers;
