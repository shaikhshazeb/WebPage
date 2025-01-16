import React from "react";
import "./Footer.css";
import "./FooterMedia.css";
import lop from "../../assets/lop.svg";
import bop from "../../assets/bom.svg";
import foot from "../../assets/foots.svg";
const Footers = () => {
  return (
    <div className="Footers">
      <div className="leftside">
        <img src={lop} alt="" className="lop" />
        <p>
          Indonesian Beautypreneur Community. Wadah positif bagi para
          Beautypreneur. Berpenghasilan dari rumah dengan memanfaatkan
          teknologi. Bergabung bersama beautypreneur lainnya.
        </p>
        <img src={bop} alt="" className="lop" />
      </div>
      <div className="midside">
        <div className="About">
          <big>
            <h1>About</h1>
          </big>
          <br />
          <a href="#">Home</a>
          <br />
          <a href="#">Beautypreneur</a>
          <br />
          <a href="#">Brand Partner</a>
          <br />
          <a href="#">Official Partner</a>
        </div>
        <div className="support">
          <big>
            <h1>Support</h1>
          </big>
          <br />
          <a href="#">
            Kelas Geratis <span>*</span>
          </a>
          <br />
          <a href="#">Fasilitas</a>
          <br />
          <a href="#">FAQs</a>
          <br />
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="rightside">
        <img src={foot} alt="" className="lop1" />
      </div>
    </div>
  );
};

export default Footers;
